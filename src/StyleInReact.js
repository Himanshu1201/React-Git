import React from "react";
import './Style.css';
import style from './custom.module.css';
import {Button} from 'react-bootstrap';
function StyleInReact (){
    return(
        <div>
            <h1 className="primary-heading" > Style Type 1 in React js</h1>
            <h1 style={{color:"black", background:"yellow"}}> Style Type 2 in React js</h1>
            <h1 className={style.type3Heading}> Style Type 3 in React js</h1>
            <Button variant="secondary"> Primary Button </Button>
        </div>
    )
}

export default StyleInReact;