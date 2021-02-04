import React, { Component } from 'react'
import CharacterContainer from './CharacterContainer'
import CharacterForm from './CharacterForm'
import CharacterTable from './CharacterTable'

export default class MainContainer extends Component {
    render(){

        // debugger
        return(
            <div className="main-container">
                <CharacterForm userID={this.props.userID} updateCharacters={this.props.updateCharacters} blizzardToken={this.props.blizzardToken}/>
                <CharacterContainer characters={this.props.characters} blizzardToken={this.props.blizzardToken}/>
                <CharacterTable characters={this.props.characters} blizzardToken={this.props.blizzardToken}/>
            </div>
        )
    }
}