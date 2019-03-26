import React, { Component } from 'react'

import './Artwork.css';

export class Artwork extends Component {
  render() {
    return (
      <div>
        <h2>My Work</h2>
        <div className="art">
            <img src = "http://via.placeholder.com/260x170"></img>
            <img src = "http://via.placeholder.com/260x170"></img>
            <img src = "http://via.placeholder.com/260x170"></img>
        </div>



      </div>
    )
  }
}

export default Artwork
