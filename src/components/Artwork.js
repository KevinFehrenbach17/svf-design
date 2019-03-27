import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ImgOne from './imgs/FallBirches.jpg'
import ImgTwo from './imgs/Poppies.jpg'
import ImgThree from './imgs/SerenityTea.jpg'



import './Artwork.css';

export class Artwork extends Component {
  render() {
    return (
      <div>
        <h2>My Work</h2>
        <div className="art">
            
            <Link to="/landscape" >LandScape</Link>
            <img src = {ImgOne} className="picOne"></img>
            

            <Link to="/florals" >LandScape</Link>
            <img src = {ImgTwo} className="picTwo"></img>
            

            <Link to="/stilllife" >LandScape</Link>
            <img src = {ImgThree} className="picThree"></img>
            
            
        </div>



      </div>
    )
  }
}

export default Artwork
