import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import './Panier.css';

import Listepersonnes from './Listepersonnes'
import stormtrooper from '../img/stormtrooper.gif'

const findPersonsByHomeworld = (str, arr) => {
  return arr.filter(personne => personne.homeworld === str )
}

class Naboo extends Component {

  constructor(){
    super()

    this.state = {
      url: 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json',
      loading: true,
      liste: [],
      listeTatooine: [],
      listeNaboo: [],
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
        listeTatooine: findPersonsByHomeworld('tatooine', charactersRes),
        listeNaboo: findPersonsByHomeworld('naboo', charactersRes)
      })))
  }
  render() {
    return <Container>
      {this.state.loading && <img src={stormtrooper} alt='gentil stormtrooper'></img>}
      <Row>
      
        <Col xs="6">
        <h1>From Tatooine</h1>
          <Listepersonnes 
          liste={this.state.listeTatooine}
          />
   
        </Col>
        <Col xs="6">
        <h1>From Naboo</h1>
          <Listepersonnes 
          liste={this.state.listeNaboo}
        />

        </Col>

      </Row>
      
      </Container>
  }
}

export default Naboo
