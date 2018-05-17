import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Listepersonnes from "./Listepersonnes";

const arr = [{
  "id": 1,
  "name": "Luke Skywalker",
  "height": 1.72,
  "mass": 73,
  "gender": "male",
  "homeworld": "tatooine",
  "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
  "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
  "born": -19,
  "bornLocation": "polis massa",
  "died": 34,
  "diedLocation": "ahch-to",
  "species": "human",
  "hairColor": "blond",
  "eyeColor": "blue",
  "skinColor": "light",
  "cybernetics": "Prosthetic right hand",
  "affiliations": [
    "Alliance to Restore the Republic",
    "Red Squadron",
    "Rogue Squadron",
    "Massassi Group",
    "Leia Organa's team",
    "Endor strike team",
    "Jedi Order",
    "Bright Tree tribe",
    "New Republic",
    "Resistance"
  ],
  "masters": [
    "Obi-Wan Kenobi",
    "Yoda"
  ],
  "apprentices": [
    "Leia Organa",
    "Ben Solo (along with a dozen apprentices)",
    "Rey"
  ],
  "formerAffiliations": []
}]

const BasicExample = () => (
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
  <div>
    <h2>Home</h2>
  </div>
);

const Love = () => (
  <div>
    <h2>Rencontre l'amour intergalactique</h2>
    <p>avec l'api starwars</p>
    <Listepersonnes/>
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

export default BasicExample;