import { useState } from "react";

function HooksIntro(){
    const [data, setData] = useState('Himanshu Kumar, React Hooks Intro');
    return(
        <div>
            <h1> {data} </h1>
            <button onClick={()=> setData("I have Updated the content")}> Update Data </button>
        </div>
    )
}

export default HooksIntro;