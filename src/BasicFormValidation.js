import React, {useState} from "react";

export default function BasicFormValidation() {
    
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[userError, setUserError] = useState(false);
    const[passError, setPassError] = useState(false);

    function loginHandler(e){
        e.preventDefault();
    }

    function UserHandler(e){
        let item = e.target.value;

        if(item.length < 3){
            setUserError(true);
        }else{
            setUserError(false);
        }
    }   

    function PasswordHandler(e){
        let item = e.target.value;

        if(item.length < 3){
            setPassError(true);
        }else{
            setPassError(false);
        }
    }
    return(
        <div >
            <h2> Basic Form Validation</h2>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="enter username" onChange={UserHandler}/> {userError?<span> Not Valid User</span>:""}<br/><br/>
                <input type="text" placeholder="enter password" onChange={PasswordHandler}/>{passError?<span> Not Valid Password</span>:""}<br/><br/>
                <button type="submit"> Login </button>
            </form>
        </div>
    );
}