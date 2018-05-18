import React from 'react';
import './Router.css';
import stormtrooper from './img/stormtrooper.gif'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Panier from './components/Panier';
import Profil from './components/Profil';


const Systemrouter = () => (
  <Router>
    <div>
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
      <Route path="/topics" component={Topics} />
      <Route path="/:id" component={About} /> 
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

const About = ({match}) => (
  <div>
    <h2>Hello {match.params.id}</h2>
     <Profil id={match.params.id} /> 
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Systemrouter;
