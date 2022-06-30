import React, { Component } from 'react'
import Chef1 from "../img/chef-1.jpg";
import Chef2 from "../img/chef-2.jpg";
import Chef3 from "../img/chef-3.jpg";
export class AboutUs extends Component {
  render() {
    return (
      <div className='aboutUs d-flex justify-content-center align-items-center'>
          <div className="row m-3">
              <div className="item-1 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column">
                <h1>Our Chefs</h1>
                <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion.</p>
              </div>
              <div className="item-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                <img src={Chef1} alt="" />
                 <h5>Michale Joe</h5>
                 <p>Expert in Cake Making</p>
              </div>
              <div className="item-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                 <img src={Chef2} alt="" />
                 <h5>Michale Joe</h5>
                 <p>Expert in Cake Making</p></div>
              <div className="item-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex flex-column align-items-center">
                 <img src={Chef3} alt="" />
                 <h5>Michale Joe</h5>
                 <p>Expert in Cake Making</p></div>
          </div>
      </div>
    )
  }
}

export default AboutUs