import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class ClaimItem extends Component {
    render() {
			let status;
			if (this.props.claim_status === 0) {
				status = <Link to={'/instruction'} className="status-link">CONTINUE</Link>;
			}
			else if (this.props.claim_status === 1) {
				status = <span className="status-text">PROCESSED</span>;
			}
			else if (this.props.claim_status === 2) {
				status = <span className="status-text">PAID</span>;
			}

      return (
        <div className="claim-item">
					<div className="main-text">
						<span className="model">{this.props.model}</span> <br/>
						<span className="other-info">{this.props.class}, {this.props.year}</span>
					</div>

					<div className="sub-text">
						<span>{this.props.vin} {status}</span>
					</div>

        </div>
      );
    }
}
  
export default ClaimItem;
