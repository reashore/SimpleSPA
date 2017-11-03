
import React, { Component } from 'react';
import '../App.css';
import Home from './Home';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>

        <div classname="content">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
