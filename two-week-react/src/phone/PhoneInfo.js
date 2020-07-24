import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: 'myName',
      phone: '1234',
      id: 0,
    },
  };

  state = {
    editing: false,
    name: '',
    phone: '',
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.info === this.props.info
    ) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { info, onUpdate } = this.props;
    if (!prevState.editing && this.state.editing) {
      this.setState({
        id: info.id,
        name: info.name,
        phone: info.phone,
      });
    }

    if (prevState.editing && !this.state.editing) {
      onUpdate(this.state);
    }
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log('PhoneInfo', this.props.info.id);
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    };

    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style}>
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

          <button type="button" onClick={this.handleToggleEdit}>
            do update!
          </button>
          <button type="button" onClick={this.handleRemove}>
            do remove!
          </button>
        </div>
      );
    }

    const { id, name, phone } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{id}</b>
        </div>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button type="button" onClick={this.handleToggleEdit}>
          update!
        </button>
        <button type="button" onClick={this.handleRemove}>
          remove!
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
