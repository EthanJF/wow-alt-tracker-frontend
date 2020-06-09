import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';
import Welcome from './components/Welcome'

export default class App extends Component {

  state = {
    token: localStorage.token,
    loggedInUserId: parseInt(localStorage.userId)
  }

  setToken = event => {
    localStorage.token = event.token
    localStorage.userId = event.user_id

    this.setState({
      token: event.token,
      loggedInUserId: event.user_id
    })
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/welcome" render={(props) => <Welcome {...props} setToken={this.setToken} token={this.state.token}/>}/>
          <Route path="/home" render={(props) => <Homepage {...props} userID={this.state.loggedInUserId} />}/>
          <Route exact path='/' render = { () => <Redirect to="/welcome" /> } />
        </Switch>

      {this.state.token ? "" : <Redirect to="/welcome" />}

      </div>
    )
  }
}

