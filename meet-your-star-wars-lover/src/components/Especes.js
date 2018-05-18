import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import './Panier.css';

import Listepersonnes from './Listepersonnes'
import stormtrooper from '../img/stormtrooper.gif'

const findPersonsBy = (str, arr) => {
  return arr.filter(personne => personne.species === str )
}

class Especes extends Component {

  constructor(){
    super()

    this.state = {
      url: 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json',
      loading: true,
      liste: [],
      listeHumans: [],
      listeRobots: [],
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
        listeHumans: findPersonsBy('human', charactersRes),
        listeRobots: findPersonsBy('droid', charactersRes)
      })))
  }
  render() {
    return <Container>
      {this.state.loading && <img src={stormtrooper} alt='gentil stormtrooper'></img>}
      <Row>
      
        <Col xs="6">
        <h1>Humans</h1>
          <Listepersonnes 
          liste={this.state.listeHumans}
          />
   
        </Col>
        <Col xs="6">
        <h1>Droids</h1>
          <Listepersonnes 
          liste={this.state.listeRobots}
        />

        </Col>

      </Row>
      
      </Container>
  }
}

export default Especes
