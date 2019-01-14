import React, { Component } from 'react';
import Content from './components/Content';
import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <Content />
        </header>
      </div>
    );
  }
}

export default App;
