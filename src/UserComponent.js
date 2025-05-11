import React from "react"
import { Table } from "react-bootstrap"

function UserComponent(props){
    return(
        <div>
            <h5>{props.data.name}</h5>
            <h5>{props.data.email}</h5>
            <h5>{props.data.gender}</h5>
            <h5>{props.data.MobileNumber}</h5>
        </div>
        
    )
}

export default UserComponent