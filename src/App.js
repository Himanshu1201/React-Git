import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';
import FunctionComponentUser from './FunctionComponentUser';
import ClassComponentUser from './ClassComponentUser';
import FunctionalStudent from './FunctionalStudent';
import StudentClass from './StudentClass';

class App extends Component{
  // const [name, setName] = useState("Himanshu");
  // const [email, setEmail] = useState("hk317824@gmail.com");
  // const [mobile, setMobile] = useState("7011162031");
  // function UpdateContent(){
  //   setName("Sohan Lal");
  //   setEmail("sohanlal95854@yopmail.com");
  //   setMobile("7503624605");
  // }
  constructor(){
    super();
    this.state={
      name:"Rahul",
      email:"rahulkumar2986547@yopmail.com",
      mobile:"750362405"
    }
  }
  setData(){
    this.setState({name:"Himanshu Kumar"});
    this.setState({email:"hk317824@gmail.com"});
    this.setState({mobile:"7011162031"});
  }
  render(){
      return (  
      <div className="App">
        {/* <FunctionComponentUser/> */}
        {/* <ClassComponentUser/> */}
        {/* <FunctionalStudent 
            name={name} 
            email={email} 
            mobile={mobile}
        />
        <button onClick={()=>UpdateContent()}> Update Data </button> */}
        <StudentClass 
          name={this.state.name} 
          email={this.state.email} 
          mobile={this.state.mobile}
        />
        <button onClick={()=>this.setData()}> Update Data </button>
      </div>
    );
  }
  
}

export default App;
