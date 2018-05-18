import React, { Component } from 'react'
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'
class Profil extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const myUrl = `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${this.props.id}.json`
    fetch(myUrl)
      .then(res => res.json())
      .then(character => {
    
        this.setState(prevState => ({
          loading: false,
          data: character
        }))
      }
     )  
    }  
  
  render() {
    return <Container>
      <Card className="w-25">
          <CardImg className="img-fluid" src={this.state.data.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.data.name}</CardTitle>
            <CardSubtitle>Lover des étoiles</CardSubtitle>
            <CardText>
              Je viens de {this.state.data.homeworld} ;)
              <br />
              Je mesure {this.state.data.height} pour {this.state.data.mass} kg kikoulol!
              <br />
              {this.state.data.name === "Darth Vader" ? "et je suis SUPER méchant ahaha" : "et ça va je suis pas Darth Vader LOLLOLLOL !!"}
            </CardText>
          </CardBody>
        </Card>
      </Container>
  }
}

export default Profil
