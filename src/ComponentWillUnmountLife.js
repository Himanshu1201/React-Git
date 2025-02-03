import React,{Component} from "react";

class ComponentWillUnmountLife extends Component{
    componentWillUnmount()
    {
        // alert("componentWillUnmount called");
        console.warn('componentWillUnmount called');
    }
    render(){
        return(
            <div>
                <h2>
                    Component Will Unmount Life Cycle
                </h2>
            </div>
        )
    }
}

export default ComponentWillUnmountLife;