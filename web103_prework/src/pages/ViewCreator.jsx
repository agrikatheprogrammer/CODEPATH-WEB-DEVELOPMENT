import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../client.js"
import Creator from '../components/Creator.jsx'
export default function ViewCreator(){
    const [creator,setCreator]=useState(null)
    const {id}=useParams();
    useEffect(()=>{
        const fetchCreator= async () => {
            let {data}=await supabase.from("creators").select("*").eq("id",id).single();
            setCreator(data);
        }
        fetchCreator();
    },[id])
    if (!creator) return <p>Loading...</p>
    return (
        <Creator id={creator.id} name={creator.name} url={creator.url} imageURL={creator.imageURL} description={creator.description} viewdetails={false}/>
    );
}