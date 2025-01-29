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

function App(){
    const[name, setName] = useState("Himanshu");
      return (  
      <div className="App">
          <RenderMethodLifeCycle name={name}/>
          <button onClick={()=>setName("Kumar")}> Update Data</button>
      </div>
    );
}

export default App;
