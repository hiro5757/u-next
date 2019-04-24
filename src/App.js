import React, { Component } from 'react';
import Header from './component/Header';
import Image from './component/Image';
import Contents from './component/Contents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Image />
        <Contents />
      </div>
    );
  }
}

export default App;
