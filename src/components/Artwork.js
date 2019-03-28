import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ImgOne from './imgs/FallBirches.jpg'
import ImgTwo from './imgs/Poppies.jpg'
import ImgThree from './imgs/SerenityTea.jpg'



import './Artwork.css';

export class Artwork extends Component {
  render() {
    return (
      <div id = "artworks">
        <h2>My Work</h2>
        <div className="art">
            
            
            <Link to="/landscape" className="linkA">LandScape</Link>
            <img src = {ImgOne} className="picOne"></img>
            
            
            
            
            <Link to="/florals" className="linkB">Floral</Link>
            <img src = {ImgTwo} className="picTwo"></img>
            
            
            
            
            <Link to="/stilllife" className="linkC">Still Life</Link>
            <img src = {ImgThree} className="picThree"></img>
            
            
            
        </div>



      </div>
    )
  }
}

export default Artwork
