import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import './Panier.css';

import Listepersonnes from './Listepersonnes'
import stormtrooper from '../img/stormtrooper.gif'

const findWomen = (str, arr) => {
  return arr.filter(personne => personne.gender === 'female' )
}
const findMen = (str, arr) => {
  return arr.filter(personne => personne.gender === 'male' )
}

class Genres extends Component {

  constructor(){
    super()

    this.state = {
      url: 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json',
      loading: true,
      liste: [],
      listeWomen: [],
      listeMen: [],
      initialList: []
    }
  }

  componentDidMount(){
    fetch(this.state.url)
      .then(res => res.json())
      .then(charactersRes => 
      this.setState(prevState => ({
        loading: false,
        liste: charactersRes,
        initialList: charactersRes,
        listeWomen: findWomen('female', charactersRes),
        listeMen: findMen('male', charactersRes)
      })))
  }
  render() {
    return <Container>
      {this.state.loading && <img src={stormtrooper} alt='gentil stormtrooper'></img>}
      <Row>
      
        <Col xs="6">
        <h1>Women</h1>
          <Listepersonnes 
          liste={this.state.listeWomen}
          />
   
        </Col>
        <Col xs="6">
        <h1>Men</h1>
          <Listepersonnes 
          liste={this.state.listeMen}
        />

        </Col>

      </Row>
      
      </Container>
  }
}

export default Genres
