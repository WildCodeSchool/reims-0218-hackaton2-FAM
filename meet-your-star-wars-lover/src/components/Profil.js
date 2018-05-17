import React, { Component } from 'react'
import { Button, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'
import stormtrooper from '../img/stormtrooper.gif'

class Profil extends Component {

  constructor(){
    super()

    this.state = {
      url: `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/1.json`,
      loading: true,
      data: [] 
    }
  }

  componentDidMount(){
    console.log(this.state.url)
    fetch(this.state.url)
      .then(res => res.json())
      .then(personne => {
        console.log("on recoit: ", personne)
        this.setState(prevState => ({
          loading: false,
          data: personne
      }))
    })  
  }

  render() {
    return <Container>
      <Card className="w-25">
          <CardImg className="img-fluid" src={this.state.data.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.data.name}</CardTitle>
            <CardSubtitle>Lover des étoiles</CardSubtitle>
            <CardText>
              <p>
              Je viens de {this.state.data.homeworld} ;)
              <br />
              Je mesure {this.state.data.height} pour {this.state.data.mass} kg.
              <br />
              {this.state.data.name === "Darth Vader" ? "et je suis SUPER méchant" : "et ça va je suis pas Darth Vader"}
              </p>
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Container>
  }
}

export default Profil
