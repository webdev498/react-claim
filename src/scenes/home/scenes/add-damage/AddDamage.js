import React, { Component } from 'react';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './styles.scss';

class AddDamage extends Component {
  constructor() {
    super();

    this.state = {
      description: '',
    }
  }

  handleOnBrushClick = () => {
    this.setState({
      description: 'Add damage with the brush',
    })
  }

  handleOnDeleteClick = () => {

  }

  render() {
    return (
      <div className="add-damage-wrapper">
        <div className="content">
          <TopNav 
            backType="close" 
            narrow
            title="ADD DAMAGE" 
            goBack={() => this.props.history.goBack()}
          />

          <div className="add-damage-container">
            <div className="photo-container">
              <img src="/images/pass_1_origin.png" alt="" />
            </div>
            <div className="action">
              <div className="buttons">
                <Button variant="fab" className="action-button" onClick={this.handleOnBrushClick}>
                  <Icon>brush</Icon>
                </Button>
                <Button variant="fab" className="action-button" onClick={this.handleOnDeleteClick}>
                  <Icon>delete</Icon>
                </Button>
                <Button component={Link} to="/add-damage-part" variant="fab" className="action-button">
                  <Icon>done</Icon>
                </Button>
              </div>
              <div className="description">
                <label>{this.state.description}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDamage;