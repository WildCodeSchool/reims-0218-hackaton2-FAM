import React, { Component } from 'react'

import { Container, Button, Row, Col } from 'reactstrap'
import './Panier.css';

import Personne from './Personne'
import stormtrooper from '../img/stormtrooper.gif'

const randomNum = Math.round(Math.random() * 88)

class Genres extends Component {

  constructor(){
    super()

    this.state = {
      url: `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${randomNum}.json`,
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
        <h1>Interested?</h1>
        <Personne 
          id={this.state.data.id}
          name={this.state.data.name}
          image={this.state.data.image}
        />
        <Row className="justify-content-around pt-5 pb-5">
          <Col xs="2">
            <Button>Yes</Button>
          </Col>
          <Col xs="2">
            <Button>No</Button>
          </Col>
        </Row>
      </Container>
  }
}

export default Genres
