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
          <a href="#">Contact Me</a>
        </li>
        <li>
          <a href="#">Artwork</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
        <Link to="/" >Home</Link>
          
        </li>
      </ul>
        <div className="double"></div>
        </nav>

      </div>
    )
  }
}

export default NavPage
