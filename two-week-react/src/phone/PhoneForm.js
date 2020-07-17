import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input
          placeholder="name"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />
        <input
          placeholder="phone"
          value={this.state.phone}
          name="phone"
          onChange={this.handleChange}
        />
        <h2>{this.state.name}</h2>
        <h2>{this.state.phone}</h2>
      </form>
    );
  }
}

export default PhoneForm;
