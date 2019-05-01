import React, { Component } from 'react';

import TopNav from '../../../../../../components/topnav/TopNav';
import Title from '../../../../../../components/title/Title';
import DescriptionItem from './components/description-item/DescriptionItem';
import './styles.scss';


class AnalysisResultWhy extends Component {
  render() {
     return (
      <div className="analysis-result-wrapper">
        <div className="content">
          <TopNav backType="close" narrow goBack={() => window.history.back()}/>
          <div className="analysis-result-container">
            <Title title="Why this image wasn't processed" />
            <div className="main">
              <div className="content-image">
                <img src="/images/why-2.png" alt="" />
              </div>
              <div className="content-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </div>
              <div className="content-item-desc-list">
                <DescriptionItem iconName="brightness_medium" title="Poor lighting" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <DescriptionItem iconName="center_focus_strong" title="Incorrect photo angle" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default AnalysisResultWhy;
