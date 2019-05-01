import React, { Component } from 'react';
import TopNav from '../../components/topnav/TopNav';
import Title from '../../components/title/Title';
import Footer from '../../components/footer/Footer';
import LoginForm from './components/login-form/LoginForm';
import './styles.scss';

class Login extends Component {

  render() {
    return (
      <div className="login-wrapper">
        <TopNav goBack={() => this.props.history.goBack()}/>
        <div className="main-wrapper">
          <Title title='Log in'/>
          <LoginForm />
        </div>
        <Footer navTitle="Forgot Password?" navLink="/forgot"/>
      </div>
    );
  }
}

export default Login;
