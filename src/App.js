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
import HooksIntro from './HooksIntro';
import UseEffectTutorial from './UseEffectTutorial';
import UseEffectWithStateProps from './UseEffectWithStateProps';

function App(){ 
    const[data, setData] = useState(10);
    const[count, setCount] = useState(100);
        return(
            <div className='App'>
                < UseEffectWithStateProps count={count} data={data}/>
                <button onClick={()=> setCount(count+1)}> Update Counter </button>
            <button onClick={()=> setData(data+1)}> Update Data </button>
            </div>
        )
      }

export default App;
