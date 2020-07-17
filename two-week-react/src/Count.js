import React, { Component } from 'react';

class Count extends Component {
  state = {
    number: 0,
    error: false,
  };

  componentDidMount() {
    console.log("this is Count's componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('update ----');

    if (nextState.number === 3) return false;
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('this is the [getSnapshotBeforeUpdate]');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('this is the [componentDidUpdate]');
  }

  componentDidCatch(error, errorInfo) {
    console.log('error!!!!');
    this.setState({ error: true });
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log('-- RENDER --');

    if (this.state.error) {
      return <h1>error error</h1>;
    }

    return (
      <div>
        <h1>Counter</h1>
        <div>number: {this.state.number}</div>
        {this.state.number === 2 && <Problematic />}
        <button onClick={this.handleIncrease} type="button">
          {' '}
          +{' '}
        </button>
        <button onClick={this.handleDecrease} type="button">
          {' '}
          -{' '}
        </button>
      </div>
    );
  }
}

const Problematic = () => {
  throw new Error('ERROR!!!');
  // return <div></div>;
};

export default Count;
