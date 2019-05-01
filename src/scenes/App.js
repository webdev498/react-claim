import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './register/Register';
import RegisterSuccess from './register-success/RegisterSuccess';
import Login from './login/Login';
import Page404 from './page404/Page404';
import Home from './home/Home';
import './App.scss';


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="mobile-first-wrapper">
          <div className="content-container">
            <Router>
              <Switch>
                <Route path='/register' exact render={ (props) =>  <Register {...props} /> }></Route>
                <Route path='/register-success' exact render={ (props) => <RegisterSuccess {...props} /> }></Route>
                <Route path='/login' exact render={ (props) => <Login {...props} /> }></Route>
                <Route path='/404' exact render={ (props) => <Page404 {...props} /> }></Route>
                <Route path='/' render={(props) => <Home {...props} />}></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
