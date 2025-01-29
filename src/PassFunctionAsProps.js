import React from "react";

function PassFunctionAsProps(props){

    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1> Pass Function As an Props</h1><br/><br/>
            <button onClick={props.data}> Call Data Function </button>
        </div>
    );
}

export default PassFunctionAsProps;