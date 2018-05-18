import React, { Component } from 'react'

import { Button, Container } from 'reactstrap'
import stormtrooper from '../img/stormtrooper.gif'

import Listepersonnes from './Listepersonnes'


class Panier extends Component {

  constructor(){
    super()

    this.state = {
      url: 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json',
      loading: true,
      liste: [],
      clickedId: 0,
      profileUrl: '',
      profileData:[]
    }
    this.chooseProfile = this.chooseProfile.bind(this)
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  chooseProfile (personId) {
    console.log(`on clique sur ${personId} et voici notre url: https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${personId}.json`)
    const getProfile = `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${personId}.json`
      this.setState(prevState => ({
        profileUrl: getProfile
      }))
      fetch(getProfile)
        .then(res => res.json())
        .then(profile => console.log(profile))
  }

  componentDidMount(){
    console.log(this.state.profileUrl)
    fetch(this.state.url)
      .then(res => res.json())
      .then(charactersRes => 
      this.setState(prevState => ({
        loading: false,
        liste: charactersRes
      })))  
  }
  render() {
    return <Container>
      {this.state.loading && <img src={stormtrooper} alt='gentil stormtrooper'></img>}
      <Listepersonnes 
        liste={this.state.liste}
        chooseProfile = {this.chooseProfile}  
      />
      </Container>
  }
}

export default Panier
