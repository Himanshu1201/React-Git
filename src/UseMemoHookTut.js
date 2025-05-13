import React, {useState, useMemo} from "react";
import { Button } from "react-bootstrap";

function UseMemoHookTut(){
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(
            function multiCount(){
            console.log('MultiCount Called');
            return count * 5;
        }, [count]
    )
    
    return(
        <div>
            <h1> UseMemo Hook In React Js</h1>
            <h3>Count : { count }</h3>
            <h3>Item : { item }</h3>
            <h3> { multiCountMemo } </h3>
            <Button onClick={()=> setCount(count+1)}> Update Count </Button>
            <Button onClick={()=> setItem(item*10)} variant="success"> Update Item </Button>
        </div>
    )
}

export default UseMemoHookTut;