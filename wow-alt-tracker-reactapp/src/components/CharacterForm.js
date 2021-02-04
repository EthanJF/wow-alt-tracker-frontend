import React, { Component } from 'react'

export default class CharacterForm extends Component {

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
        return(
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
        )
    }
}