import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: 'myName',
      phone: '1234',
      id: 0,
    },
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info);
  };

  handleUpdate = () => {
    const { info, onUpdate } = this.props;
    onUpdate(info);
  };

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    };

    const { name, phone } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button type="button" onClick={this.handleRemove}>
          remove!
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
