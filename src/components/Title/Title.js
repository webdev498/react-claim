import React, { Component } from 'react';
import './styles.scss';

class Title extends Component {
    render() {
      let subTitle;
      if (this.props.subtitle) {
        subTitle = this.props.subtitle;
      }
    
      return (
        <div className="title-container">
            <h1>{this.props.title}</h1>
            <h3>{subTitle}</h3>
        </div>
      );
    }
  }
  
  
  
  export default Title;
