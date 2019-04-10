import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello</h1>
      <MyComponent name='dylan' />
      </div>
    );
  }
}

export default App;
