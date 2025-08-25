import supabase from '../client.js'
import { useEffect, useState } from 'react'
import CreatorCard from '../components/Creator.jsx'
import {Link} from 'react-router-dom'
import './stylesheets/ShowCreators.css'
export default function ShowCreators() {
    const [creators,setCreators]=useState([]);
    useEffect(() => {
        const fetchCreators=
        async () => {
            let {data} =await supabase.from("creators").select("*");
            console.log("SUCCESS: "+data);
            setCreators(data || []);
        };
        fetchCreators();
    },[]);
    return (
        <div>
            <h1>Creatorverse</h1>
            <Link to="/new">Add New Creator</Link>
            <div className='creators-grid'>
                {
                    creators.length > 0 ?
                    (creators.map(c=>
                        <CreatorCard key={c.id} id={c.id} name={c.name} description={c.description} url={c.url} imageURL={c.imageURL} />
                    )):
                    (<p>No creators yet. Add one!</p>)
                }
            </div>
        </div>
    );
}