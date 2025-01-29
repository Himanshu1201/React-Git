import React,{Component} from "react";

class ComponentDidUpdateLife extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        console.warn("Constructor Called");
    }

    componentDidUpdate(prevProps,prevState, snapshot){
        console.warn('ComponentDidUpdate Called', prevState.count, this.state.count);
        if(prevState.count=== this.state.count){
            alert('data is same');
        }
    }
    render(){
        console.warn('Render Called');
        return(
            <div>
                <h1> Component Did Update </h1>
                <h4> Counter : {this.state.count}</h4>
                <button onClick={()=>{this.setState({count:1})}}> Update Data </button>       
            </div>
        )
    }
}

export default ComponentDidUpdateLife;