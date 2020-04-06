import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import men_shirt from './mens-shirt_78211.svg';
import men_pant from './men-pant_78206.svg';
class Home extends Component {
  render() {

    return (
      <div className="row text-center">
        <div className="col-12">
          <img className="img-thumbnail logo"
            src={men_shirt} alt="logo"
          />
          <div className="col-12">
            <Button variant="secondary">Shirt</Button>
          </div>
        </div>
        <div className="col-12">
          <img className="img-thumbnail logo"
            src={men_pant} alt="logo"
          />
          <div className="col-12">
            <Button variant="secondary">Pant</Button>
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
