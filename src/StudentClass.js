import React, { Component } from "react";

class StudentClass extends Component{


    render(){
        return(
            <div >
                <h1>Props With Class Component !</h1>
                <p>Name : {this.props.name}</p>
                <p>Name : {this.props.email}</p>
                <p>Name : {this.props.mobile}</p>
            </div>
        );
    }
}

export default StudentClass; 