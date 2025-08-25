import json
import ijson
import time
import tempfile
import os
import subprocess
import uuid
import requests
import base64
import re

SONAR_URL = "http://localhost:9000"
SONAR_TOKEN = "squ_eb8f6c69544a4d19284d63aa6e69990906b3354e"

"""This function gets the public class name of java code to see if it is compileable accurately; defaults to Main otherwise for testing."""
def get_public_class_name(code: str) -> str:
    match = re.search(r'public\s+class\s+(\w+)', code)
    return match.group(1) if match else "Main"

"""This function returns a non-empty string of the class name if the Java code from Starcoder compiles. Else, an empty string is returned."""
def is_compilable(code: str) -> str:
    """Check if Java code compiles by saving file with matching class name."""
    class_name = get_public_class_name(code)
    filename = f"{class_name}.java"
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, filename)
        with open(file_path, "w") as f:
            f.write(code)
        result = subprocess.run(
            ["javac", file_path],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            return class_name
        else:
            return ""

"""This function runs sonar-scanner on given code and returns (project_key, ce_task_id)."""
def run_sonar_analysis(code: str, class_name: str) -> tuple[str, str]:
    filename = f"{class_name}.java"
    project_key = f"billas_ml_java_projt_key_12000_agrikag_{uuid.uuid4().hex[:8]}"
    with tempfile.TemporaryDirectory() as tmpdir:
        src_dir = os.path.join(tmpdir, "src")
        os.makedirs(src_dir, exist_ok=True)
        java_file = os.path.join(src_dir, filename)
        with open(java_file, "w") as f:
            f.write(code)
        sonar_props = f"""
sonar.projectKey={project_key}
sonar.sources=src
sonar.language=java
sonar.host.url={SONAR_URL}
sonar.login={SONAR_TOKEN}
        """
        with open(os.path.join(tmpdir, "sonar-project.properties"), "w") as f:
            f.write(sonar_props)
        try:
            result = subprocess.run([
                '/home/agrikagupta/jdk-17.0.7+7/bin/java',
                '-jar',
                '/home/agrikagupta/sonar-scanner-4.8.0.2856-linux/lib/sonar-scanner-cli-4.8.0.2856.jar'
            ], cwd=tmpdir, check=True, capture_output=True, text=True)
            print(f"Sonar analysis completed for project {project_key}", flush=True)
            ce_task_id = None # Extract ceTaskId from scanner output
            for line in result.stdout.splitlines():
                if "ce/task?id=" in line:
                    ce_task_id = line.split("ce/task?id=")[-1].strip()
                    break
            if not ce_task_id:
                print("Could not capture ceTaskId from sonar-scanner output.",flush=True)
                return project_key, ""
            return project_key, ce_task_id
        except subprocess.CalledProcessError as e:
            print(f"Sonar scanner failed for project {project_key} with error code {e.returncode}",flush=True)
            print("Sonar scanner stderr:", e.stderr,flush=True)
            return "", ""


"""This function waits for a specific CE task to finish."""
def wait_for_sonar_task(ce_task_id: str, poll_interval: int = 5) -> None:
    ce_url = f"{SONAR_URL}/api/ce/task?id={ce_task_id}"
    while True:
        resp = requests.get(ce_url, auth=(SONAR_TOKEN, ""))
        resp.raise_for_status()
        ce_data = resp.json()["task"]
        status = ce_data["status"]
        print(f"Task {ce_task_id} status: {status}",flush=True)
        if status in ("SUCCESS", "FAILED", "CANCELED"):
            return status
        time.sleep(poll_interval)


"""Fetch issues + metrics from SonarQube after analysis is complete."""
def fetch_sonar_data(project_key: str, ce_task_id: str) -> dict:
    status=None
    if ce_task_id:
        status=wait_for_sonar_task(ce_task_id)
    if status=="SUCCESS":
        metrics = [
            "bugs",
            "vulnerabilities",
            "code_smells",
            "sqale_debt_ratio",  # Technical debt ratio
            "complexity",
            "ncloc",
            "lines"
        ]
        url = f"{SONAR_URL}/api/measures/component?component={project_key}&metricKeys={','.join(metrics)}"
        resp = requests.get(url, auth=(SONAR_TOKEN, ""))
        resp.raise_for_status()
        data = resp.json()

        # Transform metrics into a simpler dict
        metrics_dict = {m['metric']: m['value'] for m in data.get("component", {}).get("measures", [])}
        print(json.dumps(metrics_dict, indent=2),flush=True)
        return metrics_dict

def fetch_sonar_issues(project_key: str) -> dict: 
    url = f"{SONAR_URL}/api/issues/search?projects={project_key}" 
    resp = requests.get(url, auth=(SONAR_TOKEN, "")) 
    resp.raise_for_status() 
    data = resp.json() 
    print(json.dumps(data, indent=2), flush=True) 
    return data

def enhance_dataset(json_path) -> list:
    result = []
    total = 0
    compiled = 0
    with open(json_path, "r") as f:
        items=ijson.items(f,"item")
        for item in items:
            if total % 100 ==0 :
                    print(f"so far: {compiled} out of {total}",flush=True)
            total += 1
            code = item.get("text", "")[len("CODE:\n"):]
            class_name=is_compilable(code=code)
            if class_name:
                print(class_name,flush=True)
                compiled += 1
                project_key, ceid = run_sonar_analysis(code=code,class_name=class_name)
                if not project_key:
                    continue
                sonar_output = fetch_sonar_data(project_key,ceid)
                result.append({
                    "code": code,
                    "issues": fetch_sonar_issues(project_key=project_key),
                    "metrics": sonar_output,
                    "class-name": class_name
                })
                if compiled==12000:
                   break
    print(f"Total entries: {total}, Compilable: {compiled}",flush=True)
    return result


def get_output_file(jsontouse,filepath="final_12k_java_samples.json"):
    with open(filepath,"w") as f:
        json.dump(jsontouse,f)

if __name__=="__main__":
    get_output_file(enhance_dataset("java_50k_annotated.json"))

    #nohup python create12000.py &
    # [1] 1353036