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
        <div className="pics">
            
        <div className="picInfo">
              <img src = {Bakers} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
  
              <div className="picInfo">
                <img src = {Balloon} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
  
              <div className="picInfo">
              <img src = {Boat} className ="artPic"></img>
              <p>title, print, size</p>
              </div>

              <div className="picInfo">
              <img src = {Moose} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
  
              <div className="picInfo">
              <img src = {Ebirch} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
  
              <div className="picInfo">
              <img src = {Fbirch} className ="artPic"></img>
                <p>title, print, size</p>
              </div>

              <div className="picInfo">
              <img src = {Fishtown} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
  
              <div className="picInfo">
              <img src = {Hero} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
  
              <div className="picInfo">
              <img src = {Hidden} className ="artPic"></img>
                <p>title, print, size</p>
              </div>  
              <div className="picInfo">
                <img src = {LeeFarmFall} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
                <img src = {LilFarm} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
                <img src = {LupForest} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Barn} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {PenView} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Relax} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Ripples} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Sun} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Sweet} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Chairs} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
              <div className="picInfo">
              <img src = {Viewk} className ="artPic"></img>
                <p>title, print, size</p>
              </div>
          </div>
          <Request />
      </div>
    )
  }
}

export default Artone
