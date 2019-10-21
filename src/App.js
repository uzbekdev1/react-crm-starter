import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import MainPage from './containers/Home';
import FormPage from './containers/Form';

class App extends React.Component{
  render(){
    return (
      <Router>
        <MyRoute />
      </Router>
    );
  }
  
}

function MyRoute(){
  return(
    <Switch>
      <Route exact path={'/'} component={MainPage} />
      <Route exact path={'/form'} component={FormPage} />
      <Route exact path={'/form/edit'} component={FormPage} />
    </Switch>
  );
}

export default App;
