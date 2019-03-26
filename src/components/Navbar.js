import React, { Component } from 'react'

import Logo from './sfvlogo.png';

import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
        <ul>
        <img src={Logo} className="logo"/>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
