import React, { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props){
        super()
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    render() {
        if(this.state.hasError){
            return  <h1>Errorboundary page is rendered</h1>
        }
        
        
        // return (
        //     <div>

        //         <h1>Errorboundary page is rendered</h1>
        //     </div>
        // )
    }
}

export default Errorboundary
