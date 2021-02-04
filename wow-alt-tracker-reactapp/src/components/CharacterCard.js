import React, { Component } from 'react'

export default class CharacterCard extends Component {
    state = {
        avatar: "",
        race: "",
        classType: "",
        spec: "",
        gender: "",
        faction: "",
        stillLoading: true
    }

    

    componentDidMount(){
        if(this.props.blizzardToken !== "" && this.props.blizzardToken !== undefined){
            debugger
            const character = this.props.character
            const realmName = character.realm.toLowerCase()
            const characterName = character.name.toLowerCase()
    
            // debugger
    
            fetch(`https://us.api.blizzard.com/profile/wow/character/${realmName}/${characterName}/character-media?namespace=profile-us&locale=en_US&access_token=${this.props.blizzardToken}`)
            .then(res => res.json())
            .then(resObj => {
                this.setState({
                    avatar: resObj.avatar_url
                })
            })
    
            fetch(`https://us.api.blizzard.com/profile/wow/character/${realmName}/${characterName}/appearance?namespace=profile-us&locale=en_US&access_token=${this.props.blizzardToken}`)
            .then(res => res.json())
            .then(resObj => {
                this.setState({
                    race: resObj.playable_race.name,
                    classType: resObj.playable_class.name,
                    spec: resObj.active_spec.name,
                    gender: resObj.gender.name,
                    faction: resObj.faction.name
                })
            })
            this.setState({
                stillLoading: false
            })
        }

    }
    render(){
    const character = this.props.character
    const { avatar, race, classType, spec, gender, faction } = this.state
    const stillLoading = this.state.stillLoading
    let renderThis;
    if(stillLoading){
        renderThis = <h1>Content still loading!</h1>
    } else {
        renderThis =     <div className="character-card">
        <img src={avatar}/>
        <p><strong>Name:</strong> {character.name}</p>
        <p><strong>Realm:</strong> {character.realm}</p>
        <p><strong>Race:</strong> {race}</p>
        <p><strong>Class:</strong> {classType} </p>
        <p><strong>Spec:</strong> {spec}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Faction:</strong> {faction}</p>
    </div>
    }
    return(renderThis)
    }
}