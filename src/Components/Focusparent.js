import React, { Component } from 'react'
import Focuschild from './Focuschild'

 class Focusparent extends Component {
    constructor(props){
        super(props)
        this.myparentref=React.createRef()
    }
    buttonclickFocus=()=>
    {
        
        this.myparentref.current.childfocus()
        alert("inparent")
    }
    render() {
       
        return (

            <div>
                <Focuschild ref={this.myparentref} />
                <button onClick={this.buttonclickFocus}>Focus Child</button>
            </div>
        )
    }
}

export default Focusparent
