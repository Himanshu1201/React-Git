import React,{Component} from 'react';

class RenderMethodLifeCycle extends Component{
    render(){
        console.log('render method called', this.props);
        return(
            <div> 
                <h2 align="center">Render Method Life Cycle</h2>
                <h4>User Name : {this.props.name}</h4>
            </div>
        )
    }
}

export default RenderMethodLifeCycle;