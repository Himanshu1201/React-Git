import React from "react";
import { Button } from "react-bootstrap";

function TransferChildToParent(props){
    const data = {name: 'Sumit', email: 'sumitkaur11@gmail.com', gender: 'Male', MobileNumber: '8956123265'};
    return(
        <div>
            <h1> Transfer Date From Child to Parent Component</h1>
            <h5>User Name : </h5>
            <Button onClick={()=> props.alert(data)}> Click Me </Button>
        </div>
    )
}

export default TransferChildToParent;