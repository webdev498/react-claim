import React, { Component } from 'react';
import Title from '../../../../components/title/Title';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './styles.scss';

class ReviewIntro extends Component {
  constructor() {
    super();

    this.state = {
      damage: 7,
      replace: 1,
      repair: 1,
    }
  }

  render() {
    const {damage, replace, repair} = this.state;
    const imgList = [
      '/images/pass_1.png',
      '/images/pass_2.png',
    ];

    return (
      <div className="review-intro-wrapper">
        <div className="content">
          <TopNav backType='backward' narrow goBack={() => this.props.history.goBack()}/>
          <div className="review-intro-container">
            <Title title="Manual damage review"
              subtitle={`Our algorithm identified ${damage} damages, ${replace} part to replace, and ${repair} par to repair.`}
             />
            <div className="main-area">
              <ul className="review-intro-item-list">
              {
                imgList.map((img, index) => 
                  <li className="review-intro-item">
                    <label>{index + 1}</label>
                    <img src={img} alt=""></img>
                  </li>
                  )
              }
              </ul>
            </div>
            <div className="review-footer">
              Please review all the damages manually and make corrections where needed.
            </div>
            <Button component={Link} to="/review" variant="fab" color="secondary" aria-label="Add" className="next-button">
              <Icon>arrow_forward</Icon>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewIntro;