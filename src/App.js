
import './App.css';
import React,{Component} from 'react';
 import Parent from './Components/Parent';
import Employees from './Components/Employees';
import LifeCycleOne from './Components/LifeCycleOne';
import LifeCycleTwo from './Components/LifeCycleTwo'
import Reference from './Components/Reference'
import Form from './Components/Forms'
import Focusparent from './Components/Focusparent';
import Frwdrefparent from './Components/Frwdrefparent';
import Portal from './Components/portal';
import ErrorParent from './Components/ErrorParent';
import Errorboundary from './Components/Errorboundary';
class App extends Component  {
  render(){
          return(
            <div className="App">
              <Errorboundary>
              <ErrorParent hero="super man"/>
              </Errorboundary>
              <Errorboundary>
              <ErrorParent hero="Badman"/>
              </Errorboundary>
              <Errorboundary>
              <ErrorParent hero="Joker"/>
              </Errorboundary>
              
              {/* <Portal /> */}
              {/* <Frwdrefparent/> */}
              {/* <Focusparent/> */}
              {/* <Form/> */}
              {/* <Reference /> */}
              {/* <LifeCycleTwo/> */}
              {/* <LifeCycleOne fav="Red"/> */}
            {/* <Employees/> */}
          </div>
          )
      }
}

export default App;


