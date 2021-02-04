import React, { Component } from 'react'
import CharacterCard from './CharacterCard'

export default class CharacterContainer extends Component {

    render(){
        const characters = this.props.characters.map(eachCharacter => {
            return <CharacterCard blizzardToken={this.props.blizzardToken} character={eachCharacter}/>
        })
        return(
            <div className="character-container">
                <h2>My Characters</h2>
                    {this.props.characters.length === 0 ? "You don't have any characters!" : <div>You have {this.props.characters.length} character{this.props.characters.length === 1 ? "" : "s"} <div className="character-list">{characters}</div></div>}
                </div>
        )
    }
}