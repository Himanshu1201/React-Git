import React, {useEffect, useState} from "react";

function useEffectTutorial(){
    const [count, setCount] = useState(0)
    useEffect(
        ()=> {
            console.warn('UseEffect In React');
        }
    )
    return(
        <div>
            <h2> React UseEffect Tutorial {count}</h2>
            <button onClick={()=> setCount(count+1)}> Update Cunter </button>
        </div>
    );
}

export default useEffectTutorial;