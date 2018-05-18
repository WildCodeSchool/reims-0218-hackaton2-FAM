import React, { Component } from 'react'
// import Panier from './Panier'
import { Button, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'
// import stormtrooper from '../img/stormtrooper.gif'

// console.log('url de la page: ', window.location.href)
// const url = window.location.href
// const urlArr= url.split("profil/")
// const profilId = urlArr[1]
// console.log("notre id: ", profilId)
class Profil extends Component {

  constructor(){
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    console.log("Mounting...Alors ??? ", this.props)
    const myUrl = `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${this.props.id}.json`
    fetch(myUrl)
      .then(res => res.json())
      .then(character => {
        console.log("Ceci est mon sang: ", character)
    
        this.setState(prevState => ({
          loading: false,
          data: character
        }))
      }
     )  

    
    }  
  

  render() {
    return <div>
    Carte personnage
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
      </div>
  }
}

export default Profil
