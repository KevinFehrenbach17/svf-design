import React, { Component } from 'react'

import NavPage from "./NavPage.js"
import Request from "./Request.js"

import Bakers from './imgs/BakersBeach.jpg'
import Balloon from './imgs/BalloonOverFarmland.jpg'
import Boat from './imgs/BoathouseOnTheNarrow.jpg'
import Moose from './imgs/CanadianMoose.jpg'
import Ebirch from './imgs/EmergingBirches.jpg'
import Fbirch from './imgs/FallBirches.jpg'
import Fishtown from './imgs/Fishtown.jpg'
import Hero from './imgs/Hero.jpg'
import Hidden from './imgs/HiddenInTheTrees.jpg'
import LeeFarmFall from './imgs/LeelanauFallFarm.jpg'
import LilFarm from './imgs/LittleFarm.jpg'
import LupForest from './imgs/LupineForest.jpg'
import Barn from './imgs/M22Barn.jpg'
import PenView from './imgs/PeninsulaWineryView.jpg'
import Relax from './imgs/RelaxingOnLakeLeelanau.jpg'
import Ripples from './imgs/RipplesOnLakeLeelanau.jpg'
import Sun from './imgs/SunsetPines.jpg'
import Sweet from './imgs/SweetSpotOnTheNarrows.jpg'
import Chairs from './imgs/TwoChairsAndaGeranium.jpg'
import Viewk from './imgs/ViewFromKolarickRoad.jpg'




import './Artone.css';

export class Artone extends Component {
  
  
  render() {
    return (
      <div className="wrapper" >

        <NavPage />

        <h2>LandScape</h2>
          <p>*Gilcleé prints are available and can be ordered by any size you wish, up to the size of the original painting.</p>
          <p>Items with "sold" means the original painting is unavalible</p>
        <div className="pics">


        <div className="imgs">

        <div className="picInfo">
              <a href={Bakers}><img src = {Bakers} className="baker"></img></a>
                <p>Baker’s Beach, 18”x24", $425*</p>
              </div>
  
              <div className="picInfo">
                <a href={Balloon}><img src = {Balloon} className ="balloon"></img></a>
                <p>Balloon Over Farmland  4”x12” sold*</p>
              </div>
  
              <div className="picInfo">
                <a href={Boat}><img src = {Boat} className ="boat"></img></a>
                <p>Leland River Bothouse, 9”x12”, $350</p>
              </div>

              <div className="picInfo">
                <a href={Moose}><img src = {Moose} className ="moose"></img></a>
                <p>Canadian Moose, 5”x10”, $95</p>
              </div>
  
              <div className="picInfo">
                <a href={Ebirch}><img src = {Ebirch} className ="eBirch"></img></a>
                <p>Emerging Birches, 16’x20”, $350</p>
              </div>
  
              <div className="picInfo">
              <a href={Fbirch}><img src = {Fbirch} className ="fBirch"></img></a>
              <p>Fall Birches, 16”x16”, sold*</p>
              </div>

              <div className="picInfo">
                <a href={Fishtown}><img src = {Fishtown} className ="fishTown"></img></a>
                <p>Fishtown, 12”x16”, $425*</p>
              </div>
  
              <div className="picInfo">
                <a href={Hero}><img src = {Hero} className ="heroPic"></img></a>
                <p>Leland River Bothouse,9”x12”,$350</p>
              </div>
  
              <div className="picInfo">
                <a href={Hidden}><img src = {Hidden} className ="hidd"></img></a>
                <p>Hidden In the Trees, 12”x12”, $195</p>
              </div> 

              <div className="picInfo">
                <a href={LeeFarmFall}><img src = {LeeFarmFall} className ="leeFarmFall"></img></a>
                <p>Leelanau Fall Farm, 20x20”, sold*</p>
              </div>

              <div className="picInfo">
                <a href={LilFarm}><img src = {LilFarm} className ="lilFarm"></img></a>
                <p>Little Farm, 9”x12”, sold*</p>
              </div>

              <div className="picInfo">
                <a href={LupForest}><img src = {LupForest} className ="lupForest"></img></a>
                <p>Lupine Forest, 15”x30”, sold*</p>
              </div>

              <div className="picInfo">
                <a href={Barn}><img src = {Barn} className ="barn"></img></a>
                <p>M-22 Barn, 24”x24”, sold*</p>
              </div>

              <div className="picInfo">
                <a href={PenView}><img src = {PenView} className ="penView"></img></a>
                <p>Peninsula Winery View, 12”x16”, $350</p>
              </div>

              <div className="picInfo">
                <a href={Relax}><img src = {Relax} className ="relax"></img></a>
                <p>Relaxing on Lake Leelanau, 18”x24”, sold*</p>
              </div>

              <div className="picInfo">
              <a href={Ripples}><img src = {Ripples} className ="ripp"></img></a>
              <p>Ripples on Lake Leelanau, 20”x24”, sold*</p>
              </div>

              <div className="picInfo">
              <a href={Sun}><img src = {Sun} className ="sun"></img></a>
              <p>Sunset Pines, each panel is 9”x27”, $485*</p>
              </div>

              <div className="picInfo">
              <a href={Sweet}><img src = {Sweet} className ="sweet"></img></a>
              <p>Sweet Spot on the Narrows, 10”x10”, sold*</p>
              </div>

              <div className="picInfo">
                <a href={Chairs}><img src = {Chairs} className ="chairs"></img></a>
                <p>Two Chairs and a Geranium, 18”x24”, sold *</p>
              </div>

              <div className="picInfo">
              <a href={Viewk}><img src = {Viewk} className ="viewK"></img></a>
              <p>View From Kolarick Road, 5”x15”, sold</p>
              </div>

              </div>
              
          </div>
          <Request />
      </div>
    )
  }
}

export default Artone
