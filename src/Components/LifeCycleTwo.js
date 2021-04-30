import React, { Component } from 'react'

export class LifeCycleTwo extends Component {
    constructor(props){
        super(props)
        this.state={salary:'30000'}
       
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    changesalary=()=>{
        this.setState({salary: "50000"})
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        document.getElementById("divtwo").innerHTML="The updated value is"+this.state.salary;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        document.getElementById("divone").innerHTML =
        "Before the update, the favorite was " + prevState.salary;
        return null;
      }
   

    render() {
        console.log("render");
        return (
            <React.Fragment>
                <h2>Now I am having salary 30000 RS</h2>
                <button onClick={this.changesalary}>click</button>
                <h2>Now I am having salary{ this.state.salary} Rs</h2>
                <div id="divone"></div>
                <div id="divtwo"></div>
            </React.Fragment>
        )
    }
}

export default LifeCycleTwo
