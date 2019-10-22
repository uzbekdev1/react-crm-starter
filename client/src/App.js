import React,{lazy,Suspense} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

const MainPage=lazy(()=>import('./containers/Home'));
const FormPage=lazy(()=>import('./containers/Form'));

class App extends React.Component{
  render(){
    return (
      <Router>
        <Suspense fallback={'Loading...'}>
          <MyRoute />
        </Suspense>
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
