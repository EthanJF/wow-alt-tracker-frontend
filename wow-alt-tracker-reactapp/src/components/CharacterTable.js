import React, { Component } from 'react'

export default class CharacterTable extends Component {
    render(){
        return(
            <div className="character-table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Cloak Rank</th>
                        <th>Heart of Azeroth</th>
                        <th>Raid Completion</th>
                        <th>Reputation</th>
                        <th>Profesion Levels</th>
                        <th>Profession Recipes</th>
                    </tr>      
                </table>
            </div>
        )
    }
}