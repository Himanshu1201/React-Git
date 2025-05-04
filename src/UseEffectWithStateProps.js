import React, {useState, useEffect} from "react";

function UseEffectWithStateProps(props){
    // const[data, setData] = useState(10);
    // const[count, setCount] = useState(100);

    useEffect(
        ()=> {
            console.warn('Called with data state');
        }, [props.data, props.count]
    )
    useEffect(
        ()=> {
            console.warn('Called with count state');
        }, [props.count]
    )
    return(
        <div>
            <h1> useEffect with Specific State and Props </h1>
            <h3>Counter : {props.count}</h3>
            <h3>Data : {props.data}</h3>
            {/* <button onClick={()=> setCount(count+1)}> Update Counter </button>
            <button onClick={()=> setData(data+1)}> Update Data </button> */}
        </div>
    )
}

export default UseEffectWithStateProps;