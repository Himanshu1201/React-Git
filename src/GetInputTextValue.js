import React, {useState} from "react";

function GetInputTextValue(){
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    
    function getData(val){
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
    }
    // function printData(val){ 
    // console.log(val.target.value);
    // }
    return(
        <div>
            <h1>Get Input Text Value</h1>
            {
                print ? <h3>{data}</h3> : null
            }
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}> Print Data</button>
        </div>
    );
      
}

export default GetInputTextValue;