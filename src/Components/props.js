import React from 'react';
import ReactDOM from 'react-dom';


class Rose extends React.Component{
    constructor(){
        super();
        this.state= { 
                    color:'red',
                    life:'2 years',
                    height:'2 ft'
                };
        
    }
    shouldComponentUpdate(){
        return true;
    }
    changeText =()=>{
        this.setState({color:"Yellow"})
    }
    getSnapshotBeforeUpdate(preProps,preState)
    {
        document.getElementById("past").innerHTML="Before update color was "+preState.color;
    }
    componentDidUpdate()
    {
        document.getElementById("present").innerHTML="After update color is "+this.state.color;
    }
     
    render(){
        let unmountcontainer;

        return(
            <div>
            <p>I am in Rose class</p>
            <p>My color is {this.state.color}</p>
            <button onClick={this.changeText }>Change Color</button>
            <h4 id="past"></h4>
            <h4 id="present"></h4>
            </div>
        )

       
    }
}

class Mogara extends React.Component{
    constructor(){
        super();
        this.state={favorite:"Nayana"}
    }
    componentDidMount(){
        setTimeout(this.changerext,3000);
    }

    changerext=()=> {
         
        this.setState({favorite:"Bhushan"});
    }
    
    render(){
        return(
           <div>
             <p>I am in child class Mogara</p>
             <p>Mogara is favorite flower of {this.state.favorite}</p>
           </div>
        )
    }
}
class Lotus extends React.Component{
    constructor(props){
        super(props);
        this.state= {color:"Orange"};
    }
    static getDerivedStateFromProps (props,state){
        return{color:props.lcolor};
    }
    render()
    {
        return(
            <p>This is class of Lotus.My color is {this.state.color} </p>
        )
    }

}
class Plant extends React.Component{
    
    render()
    {
       
        return(
            <div>
                <h3>Here is the main class Plant</h3>
                <Rose />
                <Mogara />
                <Lotus lcolor="pink"/>
            </div>
        )
    }
}
 
export default Plant;