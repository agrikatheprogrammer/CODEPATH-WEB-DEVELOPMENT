import React, {useState, useEffect} from 'react';
function Card({question,answer,level,image}) {
 const [showqs,setshowqs]=useState(true);
 function handleClick() {
    setshowqs(!showqs);
 }
 function getColorByLevel(level) {
  switch (level) {
    case "easy":
      return "green";
    case "medium":
      return "orange";
    case "difficult":
      return "red";
    default:
      return "gray"; // fallback
  }
}
useEffect(()=>{
   setshowqs(true)
},[question])
let thisone=getColorByLevel(level);
 return (
    <div onClick={handleClick} style={{backgroundColor:thisone,height:"400px", width:"600px", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div>
        <p style={{textAlign:"center"}}>{showqs?question:answer}</p>
        {image && showqs && (
         <img
            src={image}
            alt="card visual"
            style={{ marginTop: "15px", maxWidth: "80%", height: "auto" }}
         />
         )}
         </div>
    </div>
 );
}

export default Card;