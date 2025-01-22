import logo from './logo.svg';
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

function App(){
      return (  
      <div className="App">
          <ConditionalRendering/>
      </div>
    );
}

export default App;
