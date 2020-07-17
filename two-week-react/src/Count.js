import React, { Component } from 'react'

class Count extends Component {
  state = {
    number: 0,
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>number: {this.state.number}</div>
        <button onClick={this.handleIncrease} type="button">
          {' '}
          +{' '}
        </button>
        <button onClick={this.handleDecrease} type="button">
          {' '}
          -{' '}
        </button>
      </div>
    )
  }
}

export default Count
