import React, { Component } from 'react'



import './Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div>
              <div  id = "contact">
        <h2>Contact Me</h2>
            <div className="paragraph">
            </div>
            
            <div className="contact">
                <a href="tel:1-231-883-5200"><i class="fas fa-phone"></i></a> 
                <a href="mailto:kevinfehrenbach17@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>

            <p>For more information about my prints, please either email or call us!</p>
        
      </div>
      </div>
    )
  }
}

export default Contact
