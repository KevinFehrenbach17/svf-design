import React, { Component } from 'react'



import './Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div>
              <div  id = "contact">
        <h2>Contact Me</h2>
                <p className="text-p">For information about commitions, or gicleé prints, click the envelope, or email me at:</p>
                <h4>susan@svfdesign.com</h4>
            <div className="paragraph">
            </div>
            
            <div className="contact">
                
                <a href="mailto:kevinfehrenbach17@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>

            
        
      </div>
      </div>
    )
  }
}

export default Contact
