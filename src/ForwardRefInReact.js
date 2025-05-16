import React, {forwardRef} from "react";

function ForwardRefInReact(props, ref){
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(ForwardRefInReact);