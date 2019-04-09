import React, { Component } from 'react'



import './About.css';



export class About extends Component {
  render() {
    return (
      <div class="aboutMe" id="about">
        <h2>About Me</h2>
        
        <img src='https://pkimgcdn.peekyou.com/fd14324e4a2f0645b40da226f7697b68.jpeg' className="proPic"/>
        <div className="profile">

    <p> I have spent my summers at our cottage on Lake Leelanau in Michigan since birth.  
      The amazing beauty of this area has always fed my soul.  When I started painting, I naturally gravitated toward 
      painting landscapes of Leelanau. I also enjoy painting murals.  My life long dream of becoming a full time 
      resident of Leelanau County came true in 2008.  Now, my inspiration is always at my doorstep. 
    </p>

    <p>
    (Gicleé prints are available for paintings that are marked with an * .)
    </p>
        </div>

        
      </div>
    )
  }
}

export default About
