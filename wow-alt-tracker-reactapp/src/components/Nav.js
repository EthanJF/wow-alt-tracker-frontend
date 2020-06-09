import React, { Component } from 'react'

export default class Nav extends Component {
    render(){
        return(
            <div className="nav">
                <h2>WoW Alt Character Tracker</h2>
                <h2>Welcome {this.props.username}</h2>
                <h2>Profile</h2>
                <h2>Logout</h2>
            </div>
        )
    }
}