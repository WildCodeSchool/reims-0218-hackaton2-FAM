//TODO composant article qui affiche une ligne de panier
import React from 'react'

import { Link } from "react-router-dom";

import { Row, Col, Button } from 'reactstrap'


const Personne = ({id, image, name, homeworld, height, mass, chooseProfile, clickedId}) => (
  <div className="Row">
    <Row>
      <Col xs="12" md="4">
        <img src={ image } alt={ name } className="img-fluid"/>
      </Col>
      <Col xs="12" md="4">
        <h3> { name }</h3>
      </Col>
      <Col xs="12" md="4">
        <Link to={`/${id}`} onClick={ () => chooseProfile(id) }>Date { name }</Link>
        <Button onClick={ () => chooseProfile(id) }>Date</Button>
      </Col>
    </Row>
   
  </div>
)

export default Personne