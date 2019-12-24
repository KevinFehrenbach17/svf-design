import React, { Component } from 'react'

import NavPage from "./NavPage.js"
import Request from "./Request.js"

import SerenityTea from './imgs/SerenityTea.jpg'

import './Artone.css';

export class Artthree extends Component {
  render() {
    return (
      <div className="wrapper" >
        <NavPage />
        <h2>And More</h2>
        
        
          <div className="pics">
            <div className="picInfo">
                <a href={SerenityTea}><img src = {SerenityTea} className ="tea"></img></a>
                <p>Serenity Tea, 9”x12”, $150</p>
            </div>
          </div>
          <Request />
      </div>
    )
  }
}

export default Artthree
