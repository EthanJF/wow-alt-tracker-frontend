import React, { Component } from 'react'
import Nav from './Nav'
import MainContainer from './MainContainer'

export default class Homepage extends Component {

    state = {
        username: "",
        characters: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.userID}`)
        .then(r => r.json())
        .then(resObj => {
            this.setState({
                username: resObj.username,
                characters: resObj.characters
            })
        })
    }

    deleteAUser = () => {
        fetch(`http://localhost:3000/users/${this.props.userID}`,{
            method: "DELETE"
        })
        .then( r => r.json())
        .then(resObj => {
             this.props.logOutClick()
        })
    }

    updateCharacters = characterObj => {
        this.setState({
            characters: [...this.state.characters, characterObj]
        })
    }

    render(){
        return(
            <div className="homepage">
                <Nav username={this.state.username}/>
                <MainContainer userID={this.props.userID} characters={this.state.characters} updateCharacters={this.updateCharacters}/>
            </div>
        )
    }
}