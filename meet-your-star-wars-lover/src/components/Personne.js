//TODO composant article qui affiche une ligne de panier
import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Row, Col, Button } from 'reactstrap'


const liste = ()=> {
  fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
    .then(res => res.json())
    .then(personnes => personnes)
}

const personneDeLaListe = (arr, id) => arr.filter(personne => personne.id === id)

const Personne = ({id, image, name, chooseProfile, match}) => (
  <Router>
    <div className="Row">
      <Row>
        <Col xs="12" md="4">
          <img src={ image } alt={ name } className="img-fluid"/>
        </Col>
        <Col xs="12" md="4">
          <h3> { name }</h3>
        </Col>
        <Col xs="12" md="4">
          <Link to={`/profil/${id}`}>Date { name }</Link>
          <Button onClick={ chooseProfile }>Date</Button>
        </Col>
      </Row>
    <Route path='/profil/:id' component={ Profile } />
    </div>
  </Router>
)

const Profile = function(personneDeLaListe(liste, id)) {

}


export default Personne