import React,{PureComponent} from "react";

class PureComponentInReact extends PureComponent{
    constructor(){
        super();
        this.state = {
            count:1
        }
    }
    render(){
        console.log('check-rerendering');
        return(
            <div>
                <h1> Pure Component In React Js</h1>
                <p> Counter : {this.state.count}</p>
                <button onClick={()=> this.setState({count:this.state.count+1})}> Update Counter </button>
            </div>
        )
    }
}

export default PureComponentInReact;