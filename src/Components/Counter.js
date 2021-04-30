import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0,
          
         }
        

     }
     calculate=()=>{
        this.setState(pre=>({
            count:pre.count+1
        }))
       console.log(this);
    }
 

    render() {
        return (
           <div>
            <div>
                Button click count : {this.state.count}
            </div>
            <button onClick={this.calculate}>Counter</button>
            <p>
           Emp name:{this.props.empname} Emp iD: {this.props.empid}
           
            </p>
           </div>
        )
    }

   
}

export default Counter
