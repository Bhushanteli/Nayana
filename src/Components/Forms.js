import React,{Component} from 'react';
import styles from './form.module.css'
 class Forms extends Component{
    constructor(props){
        super(props);
        this.state={username:'',usercontact:'',errormessage:''};
    }
    submitForm=(event)=>{
        event.preventDefault();
       // this.setState({username:event.target.value});
       // alert("you entered"+this.state.username+this.state.usercontact);
       //console.log(JSON.stringify(event.target.name))
       let num=this.state.usercontact;
       if(!Number(num))
       {
           //it shows validation error at the time of form submition
        alert("SUBMITION==>Contact number must be in digits only");
       }
    }
    changetext=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        let warning='';
            //this.setState({[event.target.name]:event.target.value});
            if(name === 'usercontact'){
               
                if(!Number(value)){
                    console.log("hii");
                    //it shows validation error as values are enterd.
                  warning =<strong style={{color:"red"}}>you have enterd wrong values</strong>
                }

            }
            this.setState({errormessage:warning});
            this.setState({[name]:value});
    }
    render(){
    
        return(
            <div>
                <h3 className={styles.bigblue}>Registraion form</h3>
                <form name="formName" onSubmit={this.submitForm}>
                <p >User name :</p>
                <input type="text" name='username' onChange={this.changetext} ></input>
                <p>Contact :</p>
                <input type="text" name='usercontact' onChange={this.changetext} ></input>
                {this.state.errormessage}
                <p>Select your designation</p>
                <select >
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                    <option value="Designer">Designer</option>
                    <option value="Hr">Hr</option>
                    <option value="Admin">Admin</option>
                </select>
               
                <input type="submit"></input>
               
            </form>
            <div>
                <h1>
                    {this.state.username}
                    {this.state.usercontact}
                </h1>
            </div>
            </div>

        )
    }
}

export default Forms;