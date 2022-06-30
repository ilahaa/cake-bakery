import React, { Component } from 'react';
import OurCakes from './OurCakes';
import Menu from "./Menu";
import AboutUs from "./AboutUs";
export class Home extends Component {
  render() {
    return (
      <div className='homePage'>
      
        <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
          <div className="carousel-item slider1 active">
            <div className="texts container h-100 d-flex justify-content-center flex-column">
          <h1>Quality Cake ... <br /> with sweet, eggs & breads</h1>
          <p>Nemo enim ipsam voluptatem quia voluptates sit aspernatur aut odit aut fugit quia cosequuntur 
            magni dolores eos qui ratione
          </p>
          <div className="button">See the recipe</div>
        </div> 
          </div>
          <div className="carousel-item slider2">
            <div className="texts container h-100 d-flex justify-content-center flex-column">
          <h1>Quality Cake ... <br /> with sweet, eggs & breads</h1>
          <p>Nemo enim ipsam voluptatem quia voluptates sit aspernatur aut odit aut fugit quia cosequuntur 
            magni dolores eos qui ratione
          </p>
          <div className="button">See the recipe</div>
        </div> 
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

   
   <Menu />
   <OurCakes />
   <AboutUs />
      </div>
    )
  }
}

export default Home