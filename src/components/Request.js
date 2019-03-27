import React, { Component } from 'react'

import './Request.css';

export class Request extends Component {
  render() {
    return (
<div  id = "request">
      
        <h2>Request About a Print</h2>
        
        <div className = "wrapperR">
          
        
        <form action="mailto:kevinfehrenbach17@gmail.com" method="post" enctype="text/plain">
          
            Name:
              <input type="text" name="name" />
            Email:
              <input type="text" name="email" /><br></br>
            Print name and Size:
              
                <input type="text" name="body" size="30" className="eBody"/>
 
          <div>
            <input type="submit" value="Submit" className = "subButton" />
          </div>

            
        </form>

        </div>

      </div>
    )
  }
}

export default Request
