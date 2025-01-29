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

function App(){
      return (  
      <div className="App">
          <ComponentDidUpdateLife/>
      </div>
    );
}

export default App;
