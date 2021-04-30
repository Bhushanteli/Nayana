import React,{Component} from 'react';
import Employee from './Employee';

class Employees extends Component{
    
    render(){
        const employeeList=[
        {id:1,name:'Nayana',loc:'Khanapur',designation:'UI Developer'},
        {id:2,name:'Bhushan',loc:'Pune',designation:'Full stack Developer'},
        {id:3,name:'Dadu',loc:'Savda',designation:'Rikama'},
        {id:4,name:'Sakshi',loc:'Waghoda',designation:'6th std'},
        {id:5,name:'Kunal',loc:'Bodwad',designation:'4th std'},
        {id:6,name:'Sarthk',loc:'Bhusaval',designation:'1st std'},
        {id:7,name:'Khushi',loc:'Shahapur',designation:'5th std'},
        {id:8,name:'Saksham',loc:'Burhanpur',designation:'7th std'}   
    ]
        //const Array=employeeList.map(x=><Employee key={x.id}temp={x}/>);

        return(
            //<div>{Array}</div>
            <div><Employee temp={employeeList}/></div>
        )
    }
}
export default Employees