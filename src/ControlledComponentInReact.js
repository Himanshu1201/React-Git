import React, {useState} from "react";


function ControlledComponentInReact(){

    let [val, setVal] = useState("");

    return(
        <div> 
            <h1> Controlled Component In React Js</h1>
            <input type="text" placeholder="input value" value={val} onChange={(e)=> setVal(e.target.value)}/>
            <h3> Value : {val}</h3>
        </div>
    )
}

export default ControlledComponentInReact;