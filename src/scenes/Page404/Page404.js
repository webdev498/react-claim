import React, {	Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {

	render() {
		return ( 
			<div className="page404">
				<div className="text-muted">
					404
				</div>

				<div className="h4">
					Oops! This Page Could Not Be Found.
				</div>

				<Link to={'/'}>Go To HomePage</Link>
			</div>
		);
	}
}

export default Page404;