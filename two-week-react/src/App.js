import React, { Component } from 'react';

import './App.css';
import PhoneForm from './phone/PhoneForm';
import PhoneInfoList from './phone/PhoneInfoList';

class App extends Component {
  id = 2;

  state = {
    information: [
      {
        id: 0,
        name: 'Go Moon Young',
        phone: '010-0000-1111',
      },
      {
        id: 1,
        name: 'Gang TAE',
        phone: '010-9999-8888',
      },
    ],
  };

  handleCreate = (data) => {
    console.log('dd:', data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: (this.id += 1), ...data }),
    });
  };

  render() {
    const { information } = this.state;

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={information} />
      </div>
    );
  }
}

export default App;
