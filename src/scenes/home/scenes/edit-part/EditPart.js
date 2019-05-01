import React, { Component } from 'react';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './styles.scss';

class EditPart extends Component {

  constructor() {
    super();

    this.state = {
      part: 1,
      state: 1,
    }
  }

  handleOnClickPart(index) {
    this.setState({
      part: index,
    })
  }

  handleOnClickState(index) {
    this.setState({
      state: index,
    })
  }

  render() {
    const parts = [
      'Roof',
      'Door',
      'Windshield',
      'Fendor',
      'Bumper',
    ];

    const status = [
      'Replace',
      'Repair'
    ];

    const { action } = this.props;

    return (
      <div className="edit-part-wrapper">
        <div className="content">
          <TopNav 
            backType="close" 
            narrow
            title={ action === "Edit" ? "EDIT PART" : "SELECT DAMAGED PART"} 
            goBack={() => this.props.history.goBack()}
          />

          <div className="edit-part-container">
            <div className="photo-container">
              <img src="/images/pass_1_origin.png" alt=""/>
            </div>
            <div className="main-area">
              <div className="select-group">
              {
                parts.map((part, index) => 
                  <div 
                    key={index} 
                    className= {this.state.part === index ? "select-item selected" : "select-item" } 
                    onClick={() => this.setState({ part: index })}
                  >{part}</div>
                  )
              }
              </div>
              <div className="select-group">
              {
                status.map((state, index) => 
                  <div 
                    key={index} 
                    className= {this.state.state === index ? "select-item selected" : "select-item" } 
                    onClick={() => this.setState({ state: index })}
                  >{state}</div>)
              }
              </div>
            </div>
            <div className="action">
              <div className="done">
              {
                action === "Edit"
                &&
                <Button component={Link} to="/review" variant="fab" color="secondary" aria-label="Add" className="next-button">
                  <Icon>done</Icon>
                </Button>
              }
              {
                action === "Add"
                &&
                <Button component={Link} to="/add-damage-type" variant="fab" color="secondary" aria-label="Add" className="next-button">
                  <Icon>done</Icon>
                </Button>
              } 
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

export default EditPart;