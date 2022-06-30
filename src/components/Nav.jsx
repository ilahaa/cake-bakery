import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import AboutUs from './AboutUs';
import Menu from './Menu';
export class Nav extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light">
       <div className="myImg">
      <img className='logoImg' src={Logo} width="150" alt="" />
      </div>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{cursor:"pointer"}}  className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <Link to="/#" className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/menu" className="nav-link active" aria-current="page">Our Cakes</Link>
              </li>
              
            </ul>
            <ul className="navbar-nav right-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ms-5">
                <Link to="/ourcakes" className="nav-link active" aria-current="page">Menu</Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/aboutus" className="nav-link active" aria-current="page" href="#">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav></div>
    )
  }
}

export default Nav