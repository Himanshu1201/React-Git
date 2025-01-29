import React,{Component} from "react";

class ClassLifeCycleMethod extends Component{
    constructor(){
        super();
        console.log('Constructor Called');
        this.state = {
            count:0
        };
    }

    static getDesrivedStateFromProps(props, state){
        console.log('getDerivedstateFromProps called');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount Called');
    }

    incementCount = () =>{
        this.setState(prevState => (
            {
                count: prevState.count+1
            }
        ));
    };
    render(){
        console.log('render called');
        return(
            <div>
                <h1 style={{textAlign: 'center'}}>Counter App</h1>
                <p style={{textAlign: 'center'}}>Count : {this.state.count}</p>
                <button onClick={this.incementCount} >Increment</button>
            </div>
        )
    }
}

export default ClassLifeCycleMethod; 