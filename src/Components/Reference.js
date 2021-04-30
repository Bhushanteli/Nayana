import React, { Component } from 'react'

export class Reference extends Component {
    constructor(props){
        super(props)
        this.inputFieldRef= React.createRef();
        this.state={contact:'',name:''}
        this.cbRef=null
        this.setCbRef=(element)=>{
            this.cbRef=element
        }

    }
    componentDidMount(){
        // this.inputFieldRef.current.focus()
        if(this.cbRef)
        {
            alert("if element exists")
            this.cbRef.focus()
        }
        else{
            alert("if element not exists")
        }
    }
    onchangemethod =(event) =>{
        // let name=event.target.name;
        // let value=event.target.value;
        //   .log(name);
        
           this.setState({
               [event.target.name]:event.target.value
           })
             
        // this.setState({[name]:value});
        
    }
    onsubmitmethod=(event)=>{
       
        event.preventDefault();
        
        alert(this.state.name+this.state.contact)
    }
    render() {
        
        return (
            <>
               <form onSubmit={this.onsubmitmethod}>
                <input type="text" ref={this.setCbRef}></input>
               <label>User Name :</label>
                <input type="text" name='name' onChange={this.onchangemethod} ref={this.inputFieldRef} />
                <label>Contact :</label>
                <input type="text" name='contact' onChange={this.onchangemethod} />
                <button type="submit">Submit</button>
               </form>
            </>
        )
    }
}

export default Reference
