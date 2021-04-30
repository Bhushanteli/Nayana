import React from 'react';
import ReactDOM from 'react-dom';

class Events extends React.Component{
    // constructor(){
    //     super();
    //     this.deletePara=this.deletePara.bind(this);
    // }
    deletePara=(eve)=>{
        alert(eve.type);
    }
    render(){
        return(
            <div>
                <p>React.js is a Open Sourrce Javascript Lib
                    rary developed by Facebook. React.js is a front end (UI) library that facilitate the creation of ric
                    h internet applications (RIA). React.js gives way to create interactive
                    , stateful & reusable UI components
                </p>
                <button onClick={(event)=>this.deletePara(event)}>Delete </button>
            </div>
        )
    }

}
export default Events;