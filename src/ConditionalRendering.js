import React, {useState} from "react";

function ConditionalRendering(){
    const[loggedin, setLoggedin] = useState(3);
    return(
        <div>
            <h2> Conditional Rendering in React</h2>
            {loggedin == 1 ? <strong> Welcome User 1</strong>:loggedin == 2 ? <strong> Welcome User 2</strong>:<strong> Welcome User 3</strong>}
        </div>
    );
}

export default ConditionalRendering;