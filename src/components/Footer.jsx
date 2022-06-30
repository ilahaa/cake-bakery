import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div> 
      <footer className="text-center text-lg-start text-muted d-flex justify-content-between align-items-center">
          <div className="ms-5 d-none d-lg-block">
            <span><i class="fa-solid fa-phone"></i> + (1800) 456 7890 </span>
            <span><i class="fa-solid fa-envelope ms-5"></i> info@cakebakery.com </span>
          </div>
          <div className='me-5 d-none d-lg-block'>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
      </footer></div>
    )
  }
}

export default Footer