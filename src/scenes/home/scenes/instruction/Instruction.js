import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../../../components/topnav/TopNav';
import Title from '../../../../components/title/Title';
import './styles.scss';


class Instruction extends Component {
  render() {
    let model = this.props.model || 'Mercedes';

    return (
      <div className="register-success-wrapper">
        <div className="content">
            <TopNav iconName="local_taxi" goBack={() => this.props.history.goBack()}/>
            <Title title={'Your ' + model + ' is added to the system'} subtitle={<div>Now it's time to take some photos of the damage. <br/><br/>Taking the right photos is very important for our algorythms to identify and estimate the damage correctly.</div>} />
            <div className="instruction-navigation-container">
				<Link to={'/photo-tips'} className="link-button">Continue with photo tips</Link>
				<Link to={'/photo-upload'} className="link-button">Skip the tips</Link>
			</div>
        </div>
        
      </div>
    );
  }
}

export default Instruction;
