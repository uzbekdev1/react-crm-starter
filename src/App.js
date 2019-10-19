import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import MainPage from './components/MainPage';

class App extends React.Component{
  construct(props){
    this.state={
      formData:{

      },
      filled:false
    }
  }

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
      <Route path={'/'} component={MainPage} />
    </Switch>
  );
}

export default App;
