import React, { Component } from 'react'

import NavPage from "./NavPage.js"
import Request from "./Request.js"
import GallaryB from "./GallaryB.js"

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

      <GallaryB />    
          
      <div className="pics">
          
      <div className="picInfo">
            <a href={Bouqet}><img src = {Bouqet} className ="bouqet"></img></a>
              <p>Bountiful Bouquet, 12”x12”, sold</p>
            </div>

            <div className="picInfo">
              <a href={Hydrangeas}><img src = {Hydrangeas} className ="bouqet"></img></a>
              <p>Hydrangeas, 24”x24”, $350</p>
            </div>

            <div className="picInfo">
            <a href={Mon}><img src = {Mon} className ="mon"></img></a>
            <p>Monarchs and Poppies, 9X12, sold</p>
            </div>

            <div className="picInfo">
            <a href={Mom}><img src = {Mom} className ="mom"></img></a>
            <p>My Mother’s Garden, 20”x20”, $295</p>
            </div>

            <div className="picInfo">
            <a href={Poppies}><img src = {Poppies} className ="poppies"></img></a>
            <p>Poppies, 20”x20”, $385</p>
            </div>

            <div className="picInfo">
            <a href={PoppiesPlus}><img src = {PoppiesPlus} className ="poppiesPlus"></img></a>
            <p>Poppies and Lace II, 16”20”, $325</p>
            </div>



        </div>
        <Request />
    </div>
    )
  }
}

export default Arttwo
