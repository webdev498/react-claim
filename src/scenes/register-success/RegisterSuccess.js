import React, { Component } from 'react';
import Title from '../../components/title/Title';
import './styles.scss';
import RegisterSuccessNavigation from './components/register-success-nav/RegisterSuccessNavigation';
import TopNav from '../../components/topnav/TopNav';

class RegisterSuccess extends Component {
  render() {
    return (
      <div className="register-success-wrapper">
        <div className="content">
            <TopNav iconName="person_pin" hasMore goBack={() => this.props.history.goBack()}/>
            <Title title='Great, your account&nbsp;is&nbsp;created' subtitle='Now tell us about your vehicle' />
            <RegisterSuccessNavigation />
        </div>
        
      </div>
    );
  }
}

export default RegisterSuccess;
