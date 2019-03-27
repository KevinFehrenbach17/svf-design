import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




import Hero from './components/Hero.js'
import About from './components/About.js'
import Navbar from "./components/Navbar.js"
import Artwork from "./components/Artwork.js"
import Contact from "./components/Contact.js"
import Request from "./components/Request.js"

import Artone from "./components/Artone.js"
import Arttwo from "./components/Arttwo.js"
import Artthree from "./components/Artthree.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container" >
        <header className="App-header">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Navbar />
              <Hero />
              <About />
              <Artwork /> {/* should be 1 landscape, 2 florals, 3 stilllifes*/}
              <Contact />
              <Request />
            </React.Fragment>
          )} />

          {/* Put react router stuff here */}

          <Route path="/landscape" component={Artone} />
          <Route path="/florals" component={Arttwo} />
          <Route path="/stilllife" component={Artthree} />

          <Route path="/aboutme" component={About} ></Route>
          <Route path="/artwork" component={Artwork} ></Route>
          <Route path="/contact" component={Contact} ></Route>
          

          


        </header>
      </div>
      </Router>
    );
  }
}

export default App;
