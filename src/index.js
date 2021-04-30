import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import Plant from './Components/props';
import reportWebVitals from './reportWebVitals';
import Events from './Components/events';
import {Forms} from './Components/Forms';
import Counter from './Components/Counter';
import Demo from './Components/demo'
// ReactDOM.render(
//   <div>
// <h1>Hello</h1>
//   <App />
//   <Login/>
//   </div> ,
//   document.getElementById('nayanaroot')
// );
// ReactDOM.render(
//   <div>
//     Hellooo new div
//   </div>,
//   document.getElementById('root')
// );


// const myelement = React.createElement('h1', {}, 'I do not use JSX!');

// ReactDOM.render(<Plant />,document.getElementById('plantroot'));
// ReactDOM.render(<Events/>,document.getElementById('unmountroot'));
//ReactDOM.render(<Forms/>,document.getElementById('Formsroot'));

ReactDOM.render(<App/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
