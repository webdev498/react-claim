import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './styles.scss';


class DescriptionItem extends Component {
  render() {
    const { iconName, title, desc } = this.props;

    return (
      <div className="desc-item">
        <div className="icon-container">
          <Icon>{iconName}</Icon>
        </div>
        <div className="main">
          <div className="title">
            {title}
          </div>
          <div className="desc">
            {desc}
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionItem;