//TODO composant article qui affiche une ligne de panier

import React from 'react'
import { Row, Col, Button } from 'reactstrap'

const Personne = ({id, picture, name, date}) => <div className="Row">
  <Row>
    <Col xs="12" md="4">
      <img src={ picture } alt={ name } className="img-fluid"/>
    </Col>
    <Col xs="12" md="4">
      <h3> { name }</h3>
    </Col>
    <Col xs="12" md="4">
      <Button onClick={date}>Delete</Button>
    </Col>
  </Row>
</div>

export default Personne