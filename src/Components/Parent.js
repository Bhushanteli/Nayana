import React,{Component} from 'react';
import Child from './Child'
class Parent extends Component{
    constructor(){
        super()
        //this.callparent=this.callparent.bind(this);
        this.state={
            text:"Click Here",
            variable:1
    }
            
    }
    callparent=()=>{
       
         this.setState({text:'New Click'})
    }
    render()
    {
            let heading;
                // if(this.state.variable){
                //     heading=<h1>Welcome Home</h1>
                // }else{
                //     heading=<h1>Welcome Hostel</h1>
                // }
            this.state.variable==0?heading=<h1>Welcome Home</h1>: heading=<h1>Welcome Hostel</h1>
            
        return(
            <div>
                <div>{heading}</div>
                <h3> Parent Class</h3>
                
                <Child callParentMethod={this.callparent} changetext={this.state.text} />
            </div>
        )
    }

}
export default Parent;