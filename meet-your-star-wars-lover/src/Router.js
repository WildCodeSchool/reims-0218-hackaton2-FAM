import React from 'react';
import './Router.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Listepersonnes from "./components/Listepersonnes";
import Personne from './components/Personne';
import Panier from './components/Panier';

// const api = 'https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json'
// const personnes = []

// fetch(api)
//   .then(res => res.json())
//   .then(data => console.log(data))

const luke ={
  id: 1,
  name: "Luke Skywalker",
  image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
}

const liste = [
  {
    id: 2,
    name: "fantôme de Luke Skywalker",
    image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
  },
  {
    id: 3,
    name: "Luke Skywalker dans tes rêves",
    image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
  }
]

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
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />

    </div>
  </Router>
);

const Home = () => ( 
    <Panier article={liste}/>
);

const Love = () => (
  <div>
    <h2>Rencontre l'amour intergalactique</h2>
    <p>avec l'api starwars</p>
    <Personne {...luke}>
    </Personne>
    <Listepersonnes liste={liste}/>
    
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
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
