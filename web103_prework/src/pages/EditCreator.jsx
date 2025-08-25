import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../client";
export default function EditCreator(){
    const [form,setForm]=useState({name:"",description:"",url:"",imageURL:null})
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        const fetchCreator= async ()=>{
            let {data}=await supabase.from("creators").select("*").eq("id",id).single();
            if (data) setForm(data)
        }
    fetchCreator();
    },
    [id]);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleUpdate=async (e)=>{
        e.preventDefault();
        await supabase.from('creators').update(form).eq("id",id);
        navigate(`/creator/${id}`)
    };
    const handleDelete=async ()=>{
        await supabase.from('creators').delete().eq("id",id);
        navigate("/");
    }
    return (
        <form onSubmit={handleUpdate}>
            <h2>Edit Creator</h2>
            <input name="name" value={form.name} onChange={handleChange}></input>
            <input name="url" value={form.url} onChange={handleChange}></input>
            <textarea name="description" value={form.description} onChange={handleChange}></textarea>
            <input name="imageURL" value={form.imageURL} onChange={handleChange}></input>
            <input type="submit" value="Update"></input>
            <button type="button" onClick={handleDelete}>Delete</button>
        </form>
    );
}