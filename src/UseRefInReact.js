import React, { useRef } from "react";

function UseRefInReact(){
    let inputRef = useRef(null);
    function handleInput(){
        console.log('Function Call');
        inputRef.current.value = "1000";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.style.background = "black"
    }
    return(
        <div>
            <h1> useRef Hook in React Js</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={handleInput}> Handle Input</button>
        </div>
    )
}

export default UseRefInReact;