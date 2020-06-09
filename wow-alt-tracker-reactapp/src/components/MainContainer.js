import React, { Component } from 'react'

export default class MainContainer extends Component {

    state = {
        name: "",
        realm: ""
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitClick = event => {
        event.preventDefault()
        fetch("http://localhost:3000/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.userID,
                name: this.state.name,
                realm: this.state.realm
            })
        })
            .then(r => r.json())
            .then(resp => {
                this.props.updateCharacters(resp)
            })
    }

    render(){
        const characters = this.props.characters.map(eachCharacter => {
            return <li><strong>Name:</strong> {eachCharacter.name} <strong>Realm:</strong> {eachCharacter.realm}</li>
        })
        return(
            <div className="main-container">
                <div className="character-div">
                <h2>My Characters</h2>
                    {this.props.characters.length === 0 ? "You don't have any characters!" : <div>You have {this.props.characters.length} character{this.props.characters.length === 1 ? "" : "s"} <ul className="character-list">{characters}</ul></div>}
                </div>
                <div className="character-form">
                <h2>Add a Character</h2>
                <form>
                    <label>Character Name: </label>
                    <input name="name" value={this.state.name} onChange={this.onChange}/>
                    <br />
                    <label>Realm Name: </label>
                    <input name="realm" value={this.state.realm} onChange={this.onChange}/>
                    <button onClick={this.submitClick}>Submit</button>
                </form>
                </div>
          
            </div>
        )
    }
}