import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import ReviewItemList from './components/review-item-list/ReviewItemList';
import './styles.scss';


class Review extends Component {
  constructor() {
    super();

    this.state = {
      count: 4,
      current: 0,
      damagedParts: [],
      index: { idx: -1, idy: -1 },
      redirect: undefined,
    }
  }

  componentDidMount() {
    this.setState({
      damagedParts: [{
        type: "text",
        data: "All damages",
      }, {
        type: "item", 
        data: {
          part: 'Fender',
          property: 'Replace',
          damages: [
            'Scratch',
            'Dent',
            'Crack'
          ]
        }, 
      }, {
        type: "item",
        data: {
          part: 'Bumper',
          property: 'Repair',
          damages: [
            'Scratch',
            'Dent'
          ]
        }, 
      }],
    })
  }

  handleOnEditDamage = () => {
    this.setState({
      redirect: <Redirect to="/edit-damage" />,
    });
  }

  handleOnEditPart = () => {
    this.setState({
      redirect: <Redirect to="/edit-part" />
    });
  }

  handleAddManually = () => {
    this.setState({
      redirect: <Redirect to="/add-damage" />
    });
  }

  handleOnClick = (idx, idy) => {
    this.setState({
      index: {idx, idy},
    });
  }

  render() {
    const navTitle = 
        <label>
          <span style={{color: 'cyan'}}>
            PHOTO {this.state.current + 1}
          </span> / {this.state.count}
        </label>;

    return (
      <div className="review-wrapper">
        { this.state.redirect }
        <div className="content">
          <TopNav 
            backType="backward" 
            narrow="true" 
            title={navTitle} 
            goBack={() => this.props.history.goBack()}
          />

          <div className="review-container">
            <div className="photo-container">
              <img src="/images/pass_1_origin.png" alt="" />
            </div>
            <div className="main-area">
              {
                this.state.damagedParts.map((part, index) => 
                  <ReviewItemList 
                    key={index} 
                    id={index}
                    type={part.type} 
                    data={part.data} 
                    onClick={(idx, idy) => {
                      console.log({idx, idy});
                      this.handleOnClick(idx, idy);
                    }}
                    onEditDamage={() => this.handleOnEditDamage()}
                    onEditPart={() => this.handleOnEditPart()}
                    selected={this.state.index.idx === index}
                    selected_child={this.state.index.idy}
                  />
                )
              }

              <ReviewItemList type="content" data={
                <div className="add-manual">
                  <div className="title">
                    <label>Did we miss anything?</label>
                    <label><strong>Add damage manually</strong></label>
                  </div>
                  <div className="actions">
                    <Icon onClick={this.handleAddManually}>add_circle</Icon>
                  </div>
                </div>
                } 
              />

              <div className="next-photo">
              {
                this.state.current < this.state.count - 1
                &&
                <div className="next-link"
                  onClick={() => this.setState(prev => (
                    {
                      current: prev.current + 1,
                    }
                  ))}
                >Next photo</div>
              }
              {
                this.state.current === this.state.count - 1
                &&
                <Link className="report-link" to={'/report'} color="primary"
                >Generate report</Link>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;