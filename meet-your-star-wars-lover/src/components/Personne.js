//TODO composant article qui affiche une ligne de panier
import React from 'react'

import { Link } from "react-router-dom";

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col } from 'reactstrap'


const Personne = ({id, image, name, species, homeworld}) => (
    <Col xs="12" sm="6" className="pt-5 pb-5">
      <Card className="text-center">
        <CardImg top width="100%" src={ image } alt={ name } className="img-fluid" />
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardSubtitle className="text-muted">{ homeworld }</CardSubtitle>
          <CardText>{ species }</CardText>
          <Link className="btn btn-danger" to={`/about/${id}`}>&#10084; Date &#10084;</Link>
        </CardBody>
      </Card>
    </Col>
)

export default Personne