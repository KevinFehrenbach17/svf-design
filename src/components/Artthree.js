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
        <h2>Art 1</h2>
          <div className="pics">
            <div className="picInfo">
                <img src = {SerenityTea} className ="artPic"></img>
                <p>title, print, size</p>
            </div>
          </div>
          <Request />
      </div>
    )
  }
}

export default Artthree
