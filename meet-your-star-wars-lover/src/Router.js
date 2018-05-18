import React from 'react';
import './Router.css';
import iloveyou from './img/iloveyou.gif';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap'

import Panier from './components/Panier';
import Profil from './components/Profil';
import Genres from './components/Genres';
import Especes from './components/Especes';
import Planetes from './components/Planetes';
import Random from './components/Random';
import Navbar from './components/Navbar';
import LoveCalculator from './components/LoveCalculator';


const Systemrouter = () => (
  <Router>
    <div>
    <Navbar />
      
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/love-calculator" component={Calculator} />
      <Route path="/genre" component={ListeGenres} />
      <Route path="/espece" component={ListeEspeces} />
      <Route path="/planete" component={ListePlanetes} />
      <Route path="/random" component={Randomlover} />
      <Route path="/about/:id" component={About} /> 
    </div>
  </Router>
);

const Home = () => ( 
  <div>
    <Container>
      <h2>Rencontre l'amour intergalactique</h2>
      <p>grâce à la Wild Code School</p>
      <img src={iloveyou} alt="han solo declares his love to leia"/>
    </Container>
    <Panier />
  </div>
);

const Calculator = () => (
  <div>
    <h2>Laisse le calculateur de la Force choisir ton amour secret!</h2>
    <LoveCalculator/>
  </div>
);

const ListeGenres = () => (
  <div>
    <Genres />
  </div>
);

const ListeEspeces = () => (
  <div>
    <Especes />
  </div>
);

const ListePlanetes = () => (
  <div>
    <Planetes />
  </div>
);

const Randomlover = () => (
  <div>
    <Random />
  </div>
);


const About = ({match}) => (
  <div>
     <Profil id={match.params.id} /> 
  </div>
);

export default Systemrouter;
