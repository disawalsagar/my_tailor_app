import React, { Component } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
//import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import men_shirt from './mens-shirt_78211.svg';
import men_pant from './men-pant_78206.svg';
//import Shirt from '../shirt/shirt';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      NavUrl: null
    }
    this.routeChange = this.routeChange.bind(this)
  }
  routeChange = (event) => {
    let currentUrl = '\/' + event.currentTarget.value;
    console.log("inside route change", currentUrl);
    this.setState({ navigate: true, NavUrl: currentUrl }, () => { this.loadpage() });
  }

  loadpage() {
    console.log(this.state)
    if (this.state.navigate && this.state.NavUrl) {
      this.props.history.push(this.state.NavUrl);
    }
  }

  render() {

    return (
      <div className="row text-center">
        <div className="col-12">
          <img className="img-thumbnail logo"
            src={men_shirt} alt="logo"
          />
          <div className="col-12">
            <Button variant="secondary" value="shirt" onClick={this.routeChange}>Shirt</Button>
          </div>
        </div>
        <div className="col-12">
          <img className="img-thumbnail logo"
            src={men_pant} alt="logo"
          />
          <div className="col-12">
            <Button variant="secondary" value="pant" onClick={this.routeChange}>Pant</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
