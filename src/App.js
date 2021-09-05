import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import Login from './components/login'
// import Logout from './components/logout'
import { useSelector } from 'react-redux';

const Rounting = () => {
  const history = useHistory()
  const states = useSelector((state) => state.loginReducer)

  if (states) {
    // console.log("this", states)
    history.push('/')
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    )

  } else {
    // console.log("this", states)
    history.push('/login')
    return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    )
  }

  // return (
  //   <Switch>
  //     <Route exact path="/">
  //       <Home />
  //     </Route>
  //     <Route exact path="/login">
  //       <Login />
  //     </Route>
  //   </Switch>
  // )
}

function App() {
  return (
    <>
      <div className="App">
        <Nav></Nav>
        <Rounting></Rounting>
      </div>
    </>
  );
}

export default App;
