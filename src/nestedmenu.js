import React, { useState,useEffect } from "react";
const useMenu = (props)=>{
    const propsHandler = (obj)=>{
        if(obj.text && obj.menu){
           return (<div>
                    <span style={{color:'red'}}>main::</span> &nbsp;&nbsp;{obj.text}
                   <ul class="child"> {obj.menu && obj.menu.map((v)=>{
                        return propsHandler(v)
                    })}
                    </ul>
                    </div>)
        }
        else{
            return <li>{obj.text}</li>
        }
    }

return propsHandler(props)
}
export default useMenu;