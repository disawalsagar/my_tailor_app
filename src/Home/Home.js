import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import men_shirt from './mens-shirt_78211.svg';
import men_pant from './men-pant_78206.svg';
class Home extends Component {
  render() {

    return (
      <div class="row text-center">
        <div class="col-12">
          <img class="img-thumbnail logo"
            src={men_shirt}
          />
          <div class="col-12">
            <Button variant="secondary">Shirt</Button>
          </div>
        </div>
        <div class="col-12">
          <img class="img-thumbnail logo"
            src={men_pant}
          />
          <div class="col-12">
            <Button variant="secondary">Pant</Button>
          </div>
        </div>
      </div>

    )
  }
}

export default Home;
