import React, { Component } from 'react';

import './App.css';
import PhoneForm from './phone/PhoneForm';
import PhoneInfoList from './phone/PhoneInfoList';

class App extends Component {
  id = 1;

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
    console.log('create dd:', data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: (this.id += 1), ...data }),
    });
  };

  handleRemove = (data) => {
    console.log('remove dd:', data);
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== data.id),
    });
  };

  handleUpdate = (data) => {
    console.log('change uu:', data);
    const { information } = this.state;
    this.setState({
      information: information.map((info) =>
        info.id === data.id ? { ...info, ...data } : info
      ),
    });
  };

  render() {
    const { information } = this.state;
    console.log('information:', information);

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
