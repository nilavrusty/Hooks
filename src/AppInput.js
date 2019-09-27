import React, { useState,useReducer } from "react";
import "./App.css";
import {reducer} from './reducer';
import Changeage from './newstate';
import useCheckbox from './checkboxstate';
import useMenu from './nestedmenu';

const nested = [
  {
    text:'menu1',
    menu:[
      {text:'menu1_1'},
      {text:'menu1_2'},
      {
        text:'menu1_3',
        menu:[
          {text:'menu1_3_1'},
          {text:'menu1_3_2'},
          {text:'menu1_3_3',
          menu:[
            {text:'menu1_3_3_1'},
            {text:'menu1_3_3_2'},
          ]  
          }
             ]
      }
    ]
  },
  {
   text:'menu2',
   menu:[
     {text:'menu2_1'},
     {text:'menu2_2'},
     {
       text:'menu2_3',
       menu:[
         {text:'menu2_4_1'},
         {text:'menu2_4_2'}
       ]
     }
   ]
 }
 ]

const App = () => {
 
  const [state,dispatch] = useReducer(reducer,{name:'',email:''});
  const checkkk = useCheckbox();
  let menus=[]
  for(let x in nested){
     menus.push(useMenu(nested[x]) )   
  }

  const [counter,setCounter] = useState(0);
  const [msg,setmsg]=useState({status:false})
 

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submission successful", state.name, state.email);
  };

  // =<span>no more increment</span>
  // const msg2=<span>no more decrement</span>
  const handleCounterINC = () => {
 let x= counter;
 x++
 if(x>10){
setmsg({status:true,value:'no more inc'})
return
 }
    setCounter(x);
  }
  const handleCounterDEC = () => {
    let x= counter;
    x--
    if(x<0){
      setmsg({status:true,value:'no more dec'})
      return
       }
    setCounter(x);
  }
 



  return (
    <div className="App">
      {/* {menus} */}
      <h1> React Hooks  </h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={e => dispatch( {type:"name" ,value : e.target.value} )}
        />
        <br />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={e => dispatch({type:"email",value:e.target.value})}
        />
        <br />
        <button type="submit"> Submit </button>
       <div><Changeage val={10} /></div>
    
       
      </form> */}

      <input type="checkbox" checked={checkkk.checkAll} onChange={checkkk.changeAllhandler}/>
      <input type="checkbox" checked={checkkk.check1} onChange={checkkk.check1handler}/>
      <input type="checkbox" checked={checkkk.check2} onChange={checkkk.check2handler}/>
      <input type="checkbox" checked={checkkk.check3} onChange={checkkk.check3handler}/>  
      {/* <div>
        <span>a</span>
      </div>
      <div>
      <span>b</span>
      </div>
      <div>
      <span>c</span>
      </div>
      <div>
      <span>c</span>
      </div>
      <div>
      <span>c</span>
      </div> */}
      {/* <button onClick={()=>{handleCounterINC() }}>counter++</button>
      <span>{counter}</span>
      <button onClick={()=>{handleCounterDEC() }}>counter--</button>
    {msg.status?<span>{msg.value}</span>:''} */}
     

    </div>
  );
}

export default App;