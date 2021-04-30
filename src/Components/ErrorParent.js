import React, { Component } from 'react'
import Events from './events'
export class ErrorParent extends Component {
    constructor(props){
        super(props)
        if(this.props.hero=='Joker'){
            throw new Error("Wrong value");
            
        } 
    }
    render() {
        return (
            <div>
                <h1>the hear is {this.props.hero}</h1>
                <Events/>
            </div>
        )
    }
}

export default ErrorParent
