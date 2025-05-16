import './App.css';
import React, { useState, Component, useRef } from 'react';
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
import StyleInReact from './StyleInReact';
import HandleArrayWithList from './HandleArrayWithList';
import HandleArrayListWithBootstrap from './HandleArrayListWithBootstrap';
import NestedArrayist from './NestedArrayList';
import ReuseComponent from './ReuseComponent';
import TransferChildToParent from './TransferChildToParent';
import PureComponentInReact from './PureComponentInReact';
import UseMemoHookTut from './UseMemoHookTut';
import RefInReact from './RefInReact';
import UseRefInReact from './UseRefInReact';
import ForwardRefInReact from './ForwardRefInReact';

function App(){ 
    let inputRef = useRef(null);

    function updateInput(){
        console.log('Functional Call');
        inputRef.current.value = "1000";
        inputRef.current.style.color = "red";
        inputRef.current.style.background = "black"
        inputRef.current.focus();
    }
    return(
        <div className='App'>
            <h1> ForwardRef Hook in React js</h1>
            <ForwardRefInReact ref={inputRef}/>
            <button onClick={updateInput}> Update InputBox </button>
        </div>
    )
    }

export default App;
