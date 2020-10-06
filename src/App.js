import React, { Component } from 'react';
import Items from './components/Items';

class App extends Component {
  render() {
    const items = [
      'Red',
      'Green',
      'Yellow'
    ];
    return (
      <Items items={items} />
    );
  }
}

export default App;