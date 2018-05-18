import React, { Component } from 'react'

import { Container } from 'reactstrap'
import './Panier.css';

import Personne from './Personne'
import stormtrooper from '../img/stormtrooper.gif'

const randomNum = 67

class Genres extends Component {

  constructor(){
    super()

    this.state = {
      url: `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id${randomNum}.json`,
      loading: true,
      data: []
    }
  }

  componentDidMount(){
    fetch(this.state.url)
      .then(res => res.json())
      .then(character => 
      this.setState(prevState => ({
        loading: false,
        data: character,
      })))
  }
  render() {
    return <Container>
      {this.state.loading && <img src={stormtrooper} alt='gentil stormtrooper'></img>}
      <Personne 
        liste={this.state.liste}
      />
      </Container>
  }
}

export default Genres
