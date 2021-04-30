import React, { Component } from 'react'
import Frwdrefchild from './Frwdrefchild'

 class Frwdrefparent extends Component {
     constructor(props){
         super(props)
         this.inputrefrence=React.createRef()
     }
     clickparent=()=>{
         this.inputrefrence.current.focus()
     }
    render() {
        return (
            <div>
                <Frwdrefchild ref={this.inputrefrence}/>
                <button onClick={this.clickparent}>Click me..</button>
            </div>
        )
    }
}

export default Frwdrefparent
