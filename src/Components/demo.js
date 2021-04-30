import React,{Component} from 'react';
import Counter from './Counter'
class Demo extends Component{
    render() {
        return(
            <div>
                 <h2>I am a {this.props.color} Demo class!</h2>;
                 <Counter empname="bhushan" />
            </div>
        )
      }

}
export default Demo
