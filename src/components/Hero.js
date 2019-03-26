import React, { Component } from 'react'

import HeroImg from './imgs/Hero.jpg';

import './Hero.css';

export class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div className="center">
        <img src={HeroImg} className="hero"/>
        </div>
        
      </div>
    )
  }
}

export default Hero
