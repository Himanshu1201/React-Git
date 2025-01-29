import React, {Component} from "react";

class UpdatingComponentCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Himanshu',
            changed: false
        };
        console.log('constructor called');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps called');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState){
        console.log('getSnapshotBeforeUpdate called');
    }

    componentWillUnmount() {
        console.log('Component unmounted');
    }

    changeName = () => {
        this.setState({
            name: 'Jane',
            changed:true
        });
    };
    render(){
        return(
            <div> 
                <h1 style={{textAlign: 'center'}}> Compponent Updating Phase </h1>
                <p> Name {this.state.changed ? <h3>{this.state.name}</h3>: <p>{this.state.name}</p>} </p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UpdatingComponentCycle;