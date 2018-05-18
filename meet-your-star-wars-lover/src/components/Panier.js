import React, { Component } from 'react'

import { Container, Form, FormGroup, Input } from 'reactstrap'
import './Panier.css';

import Listepersonnes from './Listepersonnes'

const findPersonne = (str, arr) => {
  console.log(arr)
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
  <Form>
    <FormGroup>
      <Input type="text" placeholder="Poké recherche" onChange={this.handleInput.bind(this)} />
    </FormGroup>
  </Form>
  <Listepersonnes liste={this.state.liste} />
  </Container>
  }
}

export default Panier
