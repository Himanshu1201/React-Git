import React, {Component} from "react";

class ClassComponentUser extends Component {

    constructor(){
        super();
        this.state={
            data: 0
        }
    }
    demo() {
        this.setState({data:this.state.data+1})
    }
    render()
    {
        return(
            <div>
                <h1>Class User Component</h1>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.demo()}> Update Content</button>
            </div>
            
        )
    }
}

export default ClassComponentUser;