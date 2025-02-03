import React,{Component} from "react";

class ShouldComponentUpdate extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(){
        console.warn("shouldComponentUpdate", this.state.count);
        if(this.state.count > 5 && this.state.count < 10){
            return true;
        }
    }
    render(){
        return(
            <div>
                <h3>Should Compoupdate Lify Cycle </h3>
                <strong> Counter : {this.state.count}</strong><br/><br/>
                <button onClick={()=>this.setState({count:this.state.count+1})}> Update Counter </button>
            </div>
        )
    }
}

export default ShouldComponentUpdate;