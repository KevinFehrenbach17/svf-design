import React, { Component } from 'react'

import NavPage from "./NavPage.js"
import Request from "./Request.js"

import Bouqet from './imgs/BountifulBouquet.jpg'
import Hydrangeas from './imgs/Hydrangeas.jpg'
import Mon from './imgs/MonarchsAndPoppies.jpg'
import Mom from './imgs/MyMothersGarden.jpg'
import Poppies from './imgs/Poppies.jpg'
import PoppiesPlus from './imgs/PoppiesAndLaceII.jpg'




import './Artone.css';

export class Arttwo extends Component {
  render() {
    return (
      <div className="wrapper" >
      <NavPage />
      <h2>Florals</h2>
      <div className="pics">
          
      <div className="picInfo">
            <img src = {Bouqet} className ="artPic"></img>
              <p>title, print, size</p>
            </div>

            <div className="picInfo">
              <img src = {Hydrangeas} className ="artPic"></img>
              <p>title, print, size</p>
            </div>

            <div className="picInfo">
            <img src = {Mon} className ="artPic"></img>
            <p>title, print, size</p>
            </div>

            <div className="picInfo">
            <img src = {Mom} className ="artPic"></img>
            <p>title, print, size</p>
            </div>

            <div className="picInfo">
            <img src = {Poppies} className ="artPic"></img>
            <p>title, print, size</p>
            </div>

            <div className="picInfo">
            <img src = {PoppiesPlus} className ="artPic"></img>
            <p>title, print, size</p>
            </div>



        </div>
        <Request />
    </div>
    )
  }
}

export default Arttwo
