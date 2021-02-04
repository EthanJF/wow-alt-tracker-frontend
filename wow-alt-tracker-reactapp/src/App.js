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

    this.fetchBlizzardToken()
  }

  fetchBlizzardToken = () => {
    fetch('https://us.battle.net/oauth/token', {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_BLIZZARD_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_BLIZZARD_API_CLIENT_SECRET}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then( r => r.json())
    .then( resObj => {
        fetch("http://localhost:3000/api_tokens", {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify({
              token: resObj.access_token
            })
        })
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

