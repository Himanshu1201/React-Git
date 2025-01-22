import React, {useState} from "react";

function HandleFormFields(){

    const[name, setName] = useState("");
    const[gender, setGender] = useState("");
    const[tnc, setTnc] = useState(false);
    function getFormData(e){
        console.warn(name, gender, tnc);
        e.preventDefault();
    }
    return(
        <div>
            <h1>Handle Form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e)=>setGender(e.target.value)}>
                    <option>Select Option</option>
                    <option> Male </option>
                    <option> Female </option>
                </select>
                <br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.value)}/> <span> Accept terms and conditions</span><br/><br/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default HandleFormFields;