import React from 'react';
import './Router.css';
import stormtrooper from './img/stormtrooper.gif'
import iloveyou from './img/iloveyou.gif'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap'

import Panier from './components/Panier';
import Profil from './components/Profil';
import Genres from './components/Genres';
import Random from './components/Random';
import Navbar from './components/Navbar';


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
    {/* Ci dessous, inscrire le composant du love calculator */}


  </div>
);

const ListeGenres = () => (
  <div>
    <Genres />
  </div>
);

const ListeEspeces = () => (
  <div>
    <Genres />
  </div>
);

const ListePlanetes = () => (
  <div>
    <Genres />
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
