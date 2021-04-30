import React, { Component } from 'react'

 class Focuschild extends Component {
    constructor(props){
        super(props)
        this.mychildref=React.createRef()
    }
    childfocus()
    {
        alert("child")
        this.mychildref.current.focus()
    }
    render() {
        
        return (
            <div>
                <input type="text" ref={this.mychildref}></input>
            </div>
        )
    }
}

export default Focuschild
