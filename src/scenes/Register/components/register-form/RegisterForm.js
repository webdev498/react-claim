import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './styles.scss';

class RegisterForm extends Component {
	state = {
		password: '',
		showPassword: false,
	};
	
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	handleClickShowPassword = () => {
		this.setState(state => ({ showPassword: !state.showPassword }));
	};


	render() {
		return (
			<form className="register-form claim-form" noValidate autoComplete="off">
				<TextField
						id="email"
						label="Email"
						onChange={this.handleChange('email')}
						margin="normal"
						fullWidth
				/>
				
				<div className="passwords-containter">
					<FormControl className="" margin="normal">
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input
								id="password"
								type={this.state.showPassword ? 'text' : 'password'}
								value={this.state.password}
								onChange={this.handleChange('password')}
								endAdornment={
								<InputAdornment position="end">
										<IconButton
										aria-label="Toggle password visibility"
										onClick={this.handleClickShowPassword}
										>
										{this.state.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
								</InputAdornment>
								}
						/>
					</FormControl>

					<TextField
							id="confirm-password"
							label="Confirm"
							onChange={this.handleChange('confirm-password')}
							type="password"
							margin="normal"
					/>
				</div>

				<Button component={Link} to="/register-success" variant="fab" color="secondary" aria-label="Add" className="next-button">
					<Icon>arrow_forward</Icon>
				</Button>
							
			</form>
		);
	}
}
   
export default RegisterForm;
