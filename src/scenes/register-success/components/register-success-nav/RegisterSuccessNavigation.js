import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class RegisterSuccessNavigation extends Component {

    handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	render() {
		return (
			<div className="register-navigation-container">
				<Link to={'/enter-vin'} className="link-button">Enter VIN</Link>
				<Link to={'/vehicle-info'} className="link-button">Enter make, model, and year</Link>
			</div>
		);
	}
}
   
export default RegisterSuccessNavigation;

