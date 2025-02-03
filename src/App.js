import './App.css';
import React, { useState, Component } from 'react';
import FunctionComponentUser from './FunctionComponentUser';
import ClassComponentUser from './ClassComponentUser';
import FunctionalStudent from './FunctionalStudent';
import StudentClass from './StudentClass';
import HideShowToggle from './HideShowToggle';
import GetInputTextValue from './GetInputTextValue';
import HandleFormFields from './HandleFormFields';
import ConditionalRendering from './ConditionalRendering';
import BasicFormValidation from './BasicFormValidation';
import PassFunctionAsProps from './PassFunctionAsProps';
import ClassLifeCycleMethod from './ClassLifeCylceMethod';
import UpdatingComponentCycle from './UpdatingComponentCycle';
import RenderMethodLifeCycle from './RenderMethodLifeCycle';
import ComponentDidMountMethod from './ComponentDidMountMethod';
import ComponentDidUpdateLife from './ComponentDidUpdateLife';
import ShouldComponentUpdate from './ShouldComponentUpdate';
import ComponentWillUnmountLife from './ComponentWillUnmountLife';

class App extends Component{
    constructor(){
        super();
        this.state = {
            show: true
        }
    }
      render(){
        return(
            <div className='App'>
                {
                    this.state.show ? <ComponentWillUnmountLife/> : <h4>child Component removed</h4>
                }

                <button onClick={()=> this.setState({show:!this.state.show})}> Toggle Child Component</button>
            </div>
        )
      }
}

export default App;
