//TODO composant article qui affiche une ligne de panier
import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Row, Col, Button } from 'reactstrap'

const Personne = ({id, image, name, homeworld, height, mass, chooseProfile, match}) => (
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
    <Route path='/profil/:id' render={()=><Profile id={id} name={ name } homeworld={homeworld} mass={mass} height={height}></Profile>}/>
    </div>
  </Router>
)

const Profile = ({ id, name, homeworld, height, mass, }) => (
  <div>
<h1>coucou je m'appelle { name }</h1>
<p>je viens de { homeworld }, je mesure { height }m pèse { mass } kg</p>
  </div>

)


export default Personne