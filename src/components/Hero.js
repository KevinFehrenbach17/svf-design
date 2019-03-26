import React, { Component } from 'react'

import HeroImg from './HeroImg.jpg';

import './Hero.css';

export class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div>
        <img src={HeroImg} className="heroImg"/>
        </div>
        
      </div>
    )
  }
}

export default Hero
