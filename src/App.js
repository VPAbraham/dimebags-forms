import React from 'react';
import './App.scss';
import DriverSignUp from './pages/DriverSignUp/DriverSignUp';
import DispensarySignUp from './pages/DispensarySignUp/DispensarySignUp';
import Landing from './pages/Landing/Landing';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/driver-signup'>
          <DriverSignUp />
        </Route>
        <Route path='/dispensary-signup'>
          <DispensarySignUp />
        </Route>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
      {/* <div className='form-container'>
          <Landing />
      </div> */}
    </div>
  );
}

export default App;
