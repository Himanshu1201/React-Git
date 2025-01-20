import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';
import FunctionComponentUser from './FunctionComponentUser';
import ClassComponentUser from './ClassComponentUser';
import FunctionalStudent from './FunctionalStudent';
import StudentClass from './StudentClass';
import HideShowToggle from './HideShowToggle';
import GetInputTextValue from './GetInputTextValue';

function App(){
      return (  
      <div className="App">
          <GetInputTextValue/>
      </div>
    );
}

export default App;
