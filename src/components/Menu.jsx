import React, { Component } from 'react'
import Cake from "../img/recipe-1.png";
export class Menu extends Component {
  render() {
    return (
     <>
    <div className="menu d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="cakeImg col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 ">
            <img src={Cake} alt="" />
          </div>
          <div className="cakeTexts col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12 d-flex flex-row">
          <div className="m-4 line"></div>
          <div className="txt">
            <h1>Special Recipe</h1>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi equatur uis autem vel eum.</p>
            <div className="button">View Details</div>
          </div>
          </div>
        </div>
      </div>
    </div>
     </>
    )
  }
}

export default Menu