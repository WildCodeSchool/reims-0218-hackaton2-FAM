import React, { Component } from 'react'

import { Container, Form, FormGroup, Input } from 'reactstrap'
import './Panier.css';

import Listepersonnes from './Listepersonnes'
import stormtrooper from '../img/stormtrooper.gif'

const findPersonne = (str, arr) => {
  return arr.filter(personne => {
    const regex = new RegExp(str, 'gi')
    return personne.name.match(regex)
  })
}

class Panier extends Component {

  constructor(){
    super()

    this.state = {
      url: 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json',
      loading: true,
      input: "",
      liste: [],
      profileUrl: '',
      initialList: []
    }
  }

  handleInput(e) {
    this.setState({
      input : e.target.value,
      liste : findPersonne(this.state.input, this.state.initialList)
    })
  }

  componentDidMount(){
    fetch(this.state.url)
      .then(res => res.json())
      .then(charactersRes => 
      this.setState(prevState => ({
        loading: false,
        liste: charactersRes,
        initialList: charactersRes
      })))
  }
  render() {
    return <Container>
      {this.state.loading && <img src={stormtrooper} alt='gentil stormtrooper'></img>}
      <Form>
        <FormGroup className="pt-5 pb-5">
          <Input type="text" placeholder="Star Love Traker" onChange={this.handleInput.bind(this)} />
        </FormGroup>
      </Form>
      <Listepersonnes
        liste={this.state.liste}
      />
      </Container>
  }
}

export default Panier
