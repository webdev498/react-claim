import React, { Component } from 'react';
import Title from '../../../../components/title/Title';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './styles.scss';


class VechicleInfo extends Component {
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};
	render() {
		return (
			<div className="vechicle-info-container">
				<TopNav backType="backward" goBack={() => this.props.history.goBack()}/>
				<div className="content">
					<Title title='Your Vehicle'/>
					<form className="vehicle-form claim-form" noValidate autoComplete="off">
						<TextField
								id="make"
								label="Make"
								onChange={this.handleChange('make')}
								margin="normal"
								fullWidth
						/>

						<TextField
								id="model"
								label="Model"
								onChange={this.handleChange('model')}
								margin="normal"
								fullWidth
						/>
										
						<TextField
								id="year"
								label="Year"
								onChange={this.handleChange('year')}
								margin="normal"
								fullWidth
						/>

						<Button component={Link} to="/instruction" variant="fab" color="secondary" aria-label="Add" className="next-button">
							<Icon>arrow_forward</Icon>
						</Button>
									
					</form>
				</div>
			</div>
		);
	}
}
  
export default VechicleInfo;
