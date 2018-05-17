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
      liste: []
    }
    this.chooseProfile = this.chooseProfile.bind(this)
  }

  chooseProfile (personId) {
    console.log(`on clique sur ${personId}`)
  }

  componentDidMount(){
    console.log(this.state.url)
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
      {this.state.loading && <div>  <h1>MESSAGE SUBLIMINAL</h1><img src={stormtrooper}></img></div>}
      <Listepersonnes 
        liste={this.state.liste}
        chooseProfile = {this.chooseProfile}  
      />
      <Button>Coucou je suis un bouton mais je sais pas encore à quoi je sers</Button>
      </Container>
  }
}

export default Panier
