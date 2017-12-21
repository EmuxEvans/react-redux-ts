import * as React from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import HomePage from '../src/components/Jumbotron'
const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
        <Button bsStyle="primary">Hello</Button>
        <HomePage/>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
