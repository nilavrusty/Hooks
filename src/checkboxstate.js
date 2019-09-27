import React, { useState,useEffect } from "react";
const useCheckbox = ()=>{

    const [checkAll,setCheckAll] = useState(false)
    const [check1,setCheck1] = useState(false)
    const [check2,setCheck2] = useState(false)
    const [check3,setCheck3] = useState(false)
  const  handleCheckboxAll = (e) => {
    console.log('parent',e.target.checked)
        if(e.target.checked){
            setCheckAll(true)
            setCheck1(true)
            setCheck2(true)
            setCheck3(true)
        }
        else{
            setCheckAll(false)
           }
    }
    const handleCheck1handler = () => {
        setCheck1(!check1)
       
    }
    const handleCheck2handler = () => {
      setCheck2(!check2)
    }
    const handleCheck3handler = () => {
       setCheck3(!check3)
    }

    return {
        checkAll,
        check1,
        check2,
        check3,
        changeAllhandler : handleCheckboxAll,
        check1handler : handleCheck1handler,
        check2handler : handleCheck2handler,
        check3handler : handleCheck3handler
    }

}
export default useCheckbox;