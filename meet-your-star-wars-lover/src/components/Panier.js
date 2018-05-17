import React, { Component } from 'react'

import { Button, Container } from 'reactstrap'

import Listepersonnes from './Listepersonnes'

class Panier extends Component {

  constructor(){
    super()

    this.state = {
      url: 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json',
      loading: true,
      liste: []
    }
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
      <Listepersonnes 
        liste={this.state.liste} />
      <Button>Coucou je suis un bouton mais je sais pas à quoi je sers</Button>
      </Container>
  }
}

export default Panier
