import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <h2>{this.state.name}</h2>
      </form>
    );
  }
}

export default PhoneForm;
