import React from 'react';
import './App.css';
import Home from './Home/Home.js';
import Shirt from './shirt/shirt.js';

class App extends React.Component {
  render() {
    return (
      <div className="cover">
        <Home />
        
        <Shirt />

        
      </div>
    );
  }
}

export default App;
