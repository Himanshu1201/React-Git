import React,{useState} from "react";

function HideShowToggle(){
    const [status, setStatus] = useState(false);
    return (  
        <div className="App">
            {/* <h1>Get Input Text Value</h1> */}
            <h1>Hide, Show and Toggle</h1>
            {
              status ? <h3>This text should be hide, show and toggle</h3> : null 
            }
            
            {/* <button onClick={()=>setStatus(true)}>Show</button>
            <button onClick={()=>setStatus(false)}>Hide</button> */}
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    );
}

export default HideShowToggle;