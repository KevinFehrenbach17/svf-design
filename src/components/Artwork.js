import React, { Component } from 'react'

import ImgOne from './imgs/BakersBeach.jpg'
import ImgTwo from './imgs/Poppies.jpg'
import ImgThree from './imgs/SerenityTea.jpg'


import './Artwork.css';

export class Artwork extends Component {
  render() {
    return (
      <div>
        <h2>My Work</h2>
        <div className="art">
            <img src = {ImgOne} className="picOne"></img>
            <img src = {ImgTwo} className="picTwo"></img>
            <img src = {ImgThree} className="picThree"></img>
        </div>



      </div>
    )
  }
}

export default Artwork
