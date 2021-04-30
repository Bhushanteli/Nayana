import React, { Component } from 'react'

export class Child extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
               <button onClick={this.props.callParentMethod}>{this.props.changetext}</button>
            </div>
        )
    }
}

export default Child
