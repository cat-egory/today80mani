import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('remove --'),
    onUpdate: () => console.log('change --!'),
  };

  render() {
    const { data } = this.props;
    const list = data.map((info) => (
      <PhoneInfo
        key={info.id}
        info={info}
        onRemove={this.props.onRemove}
        onUpdate={this.props.onUpdate}
      />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
