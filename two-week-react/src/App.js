import React, { Component } from 'react';

import './App.css';
// import Count from './Count';
import PhoneForm from './phone/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log('dd:', data);
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
