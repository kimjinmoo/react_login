import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {PrivateRoute} from "../router/PrivateRoute";
import Main from "./Main";
import Login from "./Login";

export const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={Main}/>
              <Route exact path="/login" component={Login}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App
