import React, { useState,useEffect } from "react";
const Changeage=(props)=>{
    const [age,setage]= useState(props.val)
  
    useEffect(()=>{
        setTimeout(()=>{
            setage(props.val+5)
        },2000)
        
    },[])

  const  handlechange = (e) => {
      console.log(e.target.value)
        setage(e.target.value)


    }

    return ( <input value={age} onChange={handlechange} />)
    
}
export default Changeage;