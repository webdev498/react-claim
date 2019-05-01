import React, { Component } from 'react';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './styles.scss';

class EditDamage extends Component {

  constructor() {
    super();

    this.state = {
      damage: 1,
    }
  }

  handleOnClickDamage(index) {
    this.setState({
      damage: index,
    })
  }

  render() {
    const damages = [      
      'Glass damage',
      'Gouge',
      'Light damage',
      'Missing piece',
      'Scratch',
      'Scuff'
    ];

    const { action } = this.props;

    return (
      <div className="edit-damage-wrapper">
        <div className="content">
          <TopNav 
            backType="close" 
            narrow
            title= {action === "Edit" ? "EDIT DAMAGE" : "SELECT DAMATE TYPE"}
            goBack={() => this.props.history.goBack()}
          />

          <div className="edit-damage-container">
            <div className="photo-container">
              <img src="/images/pass_1_origin.png" alt="" />
            </div>
            <div className="main-area">
              <div className="select-group">
              {
                damages.map((damage, index) => 
                  <div 
                    key={index} 
                    className= {this.state.damage === index ? "select-item selected" : "select-item" } 
                    onClick={() => this.setState({ damage: index })}
                  >{damage}</div>
                  )
              }
              </div>
            </div>
            <div className="action">
              <div className="done">
                <Button component={Link} to="/review" variant="fab" color="secondary" aria-label="Add" className="next-button">
                  <Icon>done</Icon>
                </Button>
              </div>
              {
                action === "Edit"
                &&
                <div className="remove">
                  <Icon>delete</Icon>
                  <label>Remove part</label>
                </div>
              }              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditDamage;