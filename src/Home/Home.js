import React, { Component } from 'react';
import './Home.css';
import men_shirt from './mens-shirt_78211.png';
import men_pant from './men-pant_78206.png';
import ImageBndl from './ImageBndl.js'
class Home extends Component {
  render() {
    
    return (
      <div>
        <ImageBndl
        url = {men_shirt}
        />
        <button >Shirt</button>
        <ImageBndl
        url =  {men_pant}
        />
        <button>Pant</button>
      
      </div>
    
    )
  }
}

export default Home;
