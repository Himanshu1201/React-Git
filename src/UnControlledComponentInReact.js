import React, {useRef} from "react";

function UnControlledComponentInReact(){
    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    function submitForm(e){
        e.preventDefault();
        console.log('Input Field Value 1 : ', inputRef.current.value);
        console.log('Input Field Value 2 : ', inputRef2.current.value);

        let input3 = document.getElementById('input3').value;
        console.log('Input Field Value 3 :', input3);
    }
    return(
        <div> 
            <h1> UnControlled Component In React Js</h1>
            <form onSubmit={submitForm}>
                <input ref={inputRef} type="text" /> <br/> <br/>
                <input ref={inputRef2} type="text" /> <br/> <br/>
                <input id="input3" type="text" /> <br/> <br/>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default UnControlledComponentInReact;