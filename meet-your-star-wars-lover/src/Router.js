import React from 'react';
import './Router.css';
import stormtrooper from './img/stormtrooper.gif'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Panier from './components/Panier';
import Profil from './components/Profil';
import Genres from './components/Genres';
import Random from './components/Random';
import Navbar from './components/Navbar';
import LoveCalculator from './components/LoveCalculator';


const Systemrouter = () => (
  <Router>
    <div>
    <Navbar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/love">L'amour intergalactique</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/love" component={Love} />
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
    <Panier />
    </div>
);

const Love = () => (
  <div>
    <h2>Rencontre l'amour intergalactique</h2>
    <p>avec l'api starwars</p>
    <img src={stormtrooper} alt="gentil stormtrooper"/>
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
