import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import Hero from './components/Hero.js'
import About from './components/About.js'
import Navbar from "./components/Navbar.js"
import Artwork from "./components/Artwork.js"
import Contact from "./components/Contact.js"
import Request from "./components/Request.js"

// import Artone from "./components/Artone.js"
// import Arttwo from "./components/Arttwo.js"
// import Artthree from "./components/Artthree.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container" >
        <header className="App-header">
         
          <Navbar />
          <Hero />
          <About />
          <Artwork />
          <Contact />
          <Request />

          {/* Put react router stuff here */}

          {/* <Artone />
          <Arttwo />
          <Artthree /> */}

        </header>
      </div>
    );
  }
}

export default App;
