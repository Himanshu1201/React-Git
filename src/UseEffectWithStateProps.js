import React, {useState, useEffect} from "react";

function UseEffectWithStateProps(){
    const[data, setData] = useState(10);
    const[count, setCount] = useState(100);

    useEffect(
        ()=> {
            console.warn('Called with data state');
        }, [data]
    )
    useEffect(
        ()=> {
            console.warn('Called with count state');
        }, [count]
    )
    return(
        <div>
            <h1> useEffect with Specific State and Props </h1>
            <h3>Counter : {count}</h3>
            <h3>Data : {data}</h3>
            <button onClick={()=> setCount(count+1)}> Update Counter </button>
            <button onClick={()=> setData(data+1)}> Update Data </button>
        </div>
    )
}

export default UseEffectWithStateProps;