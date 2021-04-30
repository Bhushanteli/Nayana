import React,{Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state = {brand: "ertiga",color:"red"};
    }
    render(){
        return(
            <div>
                 <h3>I am having {this.state.brand} Car!</h3>
                 <h3>I am having {this.state.color} Car!</h3>
                  <label for="username">Username</label>
                 <input  type="text" id="username"></input>
                 <label for="password">Password</label>
                 <input type="password" id="password"></input>
                 <button>login.</button>
            </div>
        )
    }
}

export default Login;