import React,{Component} from "react";

class ComponentDidMountMethod extends Component{
    constructor(){
        super();
        this.state = {
            name: "Himanshu"
        }
        console.warn("Constructor Called");
    }

    componentDidMount(){
        console.warn('ComponentDidMount Called');
    }
    render(){
        console.warn('Render Called');
        return(
            <div>
                <h1> Component Did Mount {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"Kumar"})}}> Update Data </button>
            </div>
        )
    }
}

export default ComponentDidMountMethod;