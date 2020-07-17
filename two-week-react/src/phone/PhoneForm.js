import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSummit = (e) => {
    e.preventDefault();

    this.props.onCreate(this.state);

    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSummit}>
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

        <button type="submit"> regist</button>
      </form>
    );
  }
}

export default PhoneForm;
