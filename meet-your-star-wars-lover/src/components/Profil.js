import React, { Component } from 'react'
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'
class Profil extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
      homeworld: ""
    }
  }

  componentDidMount(){
    const myUrl = `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${this.props.id}.json`
    fetch(myUrl)
      .then(res => res.json())
      .then(character => {
        this.setState(prevState => ({
          loading: false,
          data: character,
          homeworld: character.homeworld.slice(0,1).toUpperCase() + character.homeworld.slice(1)
        }))
      }
     )  
    }  
  
  render() {
    return <Container>
      <Card className="text-center mw-">
          <CardImg className="img-fluid" src={this.state.data.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Je m'appelle <strong>{this.state.data.name}</strong></CardTitle>
            <CardSubtitle>{this.state.data.gender === "male" ? "Lover des étoiles (et j'ai un long sabre !)" : "Loveuse des étoiles"}</CardSubtitle>
            <CardText>
              Je viens de {this.state.homeworld } ;)
              <br />
              Je mesure {this.state.data.height * 100}cm pour {this.state.data.mass} Kg !
              <br />
              {this.state.data.name === "Darth Vader" ? "et je suis SUPER méchant ah ah ah !" : "et ça va je suis pas Darth Vador LOLLOLLOL !!"}
            </CardText>
          </CardBody>
        </Card>
      </Container>
  }
}

export default Profil
