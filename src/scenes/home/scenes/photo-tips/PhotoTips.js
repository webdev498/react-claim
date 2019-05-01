import React, { Component } from 'react';
import Title from '../../../../components/title/Title';
import TopNav from '../../../../components/topnav/TopNav';
import { Link } from 'react-router-dom';
import './styles.scss';

class PhotoTips extends Component {
  constructor() {
    super();

    this.state = {
      count: 5,
      current: 0,
    }
  }

  render() {
    const navTitle = 
        <label>
          <span style={{color: 'cyan'}}>
            TIP {this.state.current + 1}
          </span> / {this.state.count}
        </label>

    return (
      <div className="photo-tips-wrapper">
        <div className="content">
          <TopNav 
            backType="backward" 
            narrow="true" 
            title={navTitle} 
            goBack={() => this.props.history.goBack()}
          />
          <div className="photo-tips-container">
            <div className="photo-container">
              <img src="/images/tips-photo-1.png" alt=""/>
            </div>
            <div className="tips-container">
              <Title title='Use the right angle' />
              <div className="tips-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="tips-next">
                {
                  this.state.current < this.state.count - 1
                  && <div className="next-link"
                      onClick={() => this.setState(prev => ({
                        current: prev.current + 1,
                      }))}
                    >Next tip</div>
                }
                {
                  this.state.current === this.state.count - 1
                  && <Link className="next-link"
                      to={'/photo-upload'}
                    >Start</Link>
                }
              </div>
            </div>
          </div>          
        </div>
      </div>
    )
  }
}

export default PhotoTips;