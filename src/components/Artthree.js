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
        <h2>Still Life</h2>
        <p>*Gilcleé prints are available and can be ordered by any size you wish, up to the size of the original painting.</p>
        <p>Items with "sold" means the original painting is unavalible for purchase, print may be available</p>
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
