import React, { PureComponent } from 'react'

export class LifeCycleOne extends PureComponent {
    constructor(props){
        super(props)
        this.state={favcolor: "Green"};
    }
    // static getDerivedStateFromProps(props, state)
    // {
    //     return{favcolor:props.fav};
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favcolor: "Pink"})
        },
        3000)
    }
    
    render() {
        return (
            <div>
                <h3>We are in Mounting</h3>
                <h4>My fav color is {this.state.favcolor}</h4>
            </div>
        )
    }
}

export default LifeCycleOne
