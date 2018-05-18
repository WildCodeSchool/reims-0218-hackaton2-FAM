import React, { Component } from 'react'

import { Container, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
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
      modal: false,
      data: []
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
        <div className="text-center">
        <Button className="mb-5" color="danger" onClick={this.toggle}>{this.props.buttonLabel}Cette personne m'interesse !!!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="text-center" toggle={this.toggle}>Une demande envoyée</ModalHeader>
          <ModalBody className="text-center">
            La force est en vous. Vous avez eu le courage de demander un match à cette personne. Continuez de vivre une vie d'aventures intrépides.
          </ModalBody>
          <ModalFooter>
            <Button className="text-center" color="primary" onClick={this.toggle}>Que la force soit avec vous.</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
      </Container>
  }
}

export default Genres
