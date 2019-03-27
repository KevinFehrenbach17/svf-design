import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class NavPage extends Component {
  render() {
    return (
    <div className="navBar">
        <nav>
        <ul>
          <h1 className="toph1">Susan Veenstra Fehrenbach</h1>
        {/* <img src={Logo} className="logo"/> */}
        <li>
        <Link to="/#contact">Contact Me</Link>
        </li>
        <li>
        <Link to="/#artworks">Artwork</Link>
        </li>
        <li>
        <Link to="/about">About Me</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
          
        </li>
      </ul>
        <div className="double"></div>
        </nav>

      </div>
    )
  }
}

export default NavPage
