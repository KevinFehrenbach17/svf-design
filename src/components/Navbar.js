import React, { Component } from 'react'

// import Logo from './sfvlogo.png';

import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
        <ul>
          <h1 className="toph1">Susan Veenstra Fehrenbach</h1>
        {/* <img src={Logo} className="logo"/> */}
        <li>
          <a href="#">Contact Me</a>
        </li>
        <li>
          <a href="#">Artwork</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
        <div className="double"></div>
        </nav>

      </div>
    )
  }
}

export default Navbar
