import React,{Component, createRef} from "react";
import { Button, Form  } from "react-bootstrap";

class RefInReact extends Component{
    constructor()
    {
        super();
        this.inputRef = createRef();
    }

    componentDidMount(){
        // console.log(this.inputRef.current.value="10000")
    }

    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color = 'red';
        this.inputRef.current.style.backgroundColor = 'black';
    }
    render()
    {
        return(
            <div>
                <h1> Ref In React Js</h1>
                <Form.Control type="text" ref={this.inputRef} size="sm"/>
                {/* <input type="text" ref={this.inputRef}/> */}
                <Button onClick={()=>this.getVal()}> Check Ref</Button>
            </div>
        )
    }
}

export default RefInReact;