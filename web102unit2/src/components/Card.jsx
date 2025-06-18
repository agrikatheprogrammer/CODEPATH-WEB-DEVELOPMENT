import React, {useState, useEffect} from 'react';
function Card({question,answer,level}) {
 const [showqs,setshowqs]=useState(true);
 function handleClick() {
    setshowqs(!showqs);
 }
 var thisone;
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
thisone=getColorByLevel(level);
 return (
    <div onClick={handleClick} style={{backgroundColor:thisone,height:"500px", width:"800px", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p style={{textAlign:"center"}}>{showqs?question:answer}</p>
    </div>
 );
}

export default Card;