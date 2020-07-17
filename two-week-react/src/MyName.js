import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        hello, I am {this.props.name}!
      </div>
    );
  }
}

MyName.defaultProps = {
  name: 'DEFAULT',
};

export default MyName;
