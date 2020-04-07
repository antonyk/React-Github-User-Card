import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div><h3>GitHub Network</h3></div>
          <div className='header-spacer'></div>
        </header>
        <section className='app-body'>
          <h1>GitHub Cards Demo</h1>
          <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer">
            <span>Hello World</span>
          </a>
        </section>
      </div>
    );
  }
}

export default App;
