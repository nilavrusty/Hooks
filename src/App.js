import React, { useState,useEffect } from "react";
import "./App.css";
import AppInput from './AppInput'

const urls = [
  "AWS", 
  "PRISMA"
]

const App = () => {
    const [index, setIndex] = useState(0)
    return(
      <div className="App">
        <AppInput url={urls[index]} />
        <div style={{marginTop:'20px'}}></div>
        <button onClick={() => setIndex((index) => index == 0 ? 1 : 0)}> Toggle Cloud Provider </button>
      </div>
    )
}
export default App;