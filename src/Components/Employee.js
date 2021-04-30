import React, { Component } from 'react'
import './styleSheet.css';
// const showtable={
//     backgroundColor: '#fdfcdc',
//     color:'red'
// }
export class Employee extends Component {
    constructor(props){
        super(props)
        
    }
    
    gotofunction(x){
            alert(x.name);
    }
    render() {

           // const designe=this.props.temp.id%2 ==0?"even":"odd";
            const empTable=this.props.temp.map(
                x=><tr 
                     className={x.id%2==0?'even':'odd'}>

                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.loc}</td>
                    <td>{x.designation}</td>
                    <td><button onClick={()=>this.gotofunction(x)}>Edit</button></td>
                </tr>
            )
        return (
            <div>
                {/* <table style={showtable}> */}
                <table className="tbl">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Location</th>
                    {empTable}
                </table>
            </div>
        )
    }
}

export default Employee
