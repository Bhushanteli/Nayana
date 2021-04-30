import React, { Component } from 'react'

// class Frwdrefchild extends Component {
//     constructor(props){
//         super()
//         this.childref=React.forwardRef(preops,ref)
//     }

//     render() {
//         return (
//             <div>
//                     <input type="text" ref={this.props.ref} />
//             </div>
//         )
//     }
// }

 const Frwdrefchild= React.forwardRef((props,ref)=>{
     return(
        <div>
            <input type="text" ref={ref}/>
         </div>
    )

}) 
export default Frwdrefchild
