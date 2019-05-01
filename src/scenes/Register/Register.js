import React, { Component } from 'react';
import Logo from './components/logo/Logo';
import Footer from '../../components/footer/Footer';
import Title from '../../components/title/Title';
import RegisterForm from './components/register-form/RegisterForm';
import './styles.scss';

class Register extends Component {
  render() {
    return (
      <div className="register-wrapper">
        <div className="main-wrapper">
          <Logo />
          <Title title='Register to create&nbsp;your&nbsp;claim'/>
          <RegisterForm />
        </div>
        <Footer text="Already have an account?" navTitle="Log in" navLink="/login"/>
      </div>
    );
  }
}

export default Register;
