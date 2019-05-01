import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { GridList, GridListTile } from '@material-ui/core';
import TopNav from '../../../../components/topnav/TopNav';
import Title from '../../../../components/title/Title';
import './styles.scss';


class AnalysisResult extends Component {
  constructor() {
    super();

    this.state = {
      redirect: undefined
    }
  }

  handleOnHelp = () => {
    this.setState({
      redirect: <Redirect to="/analysis-results/why/2" />
    })
  }

  render() {    
    const rejectedList = [
      '/images/reject_1.png',
      '/images/reject_2.png',
    ];

    const passedList = [
      '/images/pass_1.png',
      '/images/pass_2.png'
    ]

    return (
      <div className="analysis-result-wrapper">
        { this.state.redirect }
        <div className="content">
          <TopNav backType="backward" narrow goBack={() => this.props.history.goBack()}/>
          <div className="analysis-result-container">
            <Title title="Analysis results" />

            <div className="main-area">
              <div className="result-block">
                <label>Rejected images</label>
                <GridList className='grid-list reject' cellHeight={105} cols={3}>
                  {
                    rejectedList.map((ph, index) => (
                      <GridListTile
                        key={index}
                      >
                        <img src={ph} alt="" />
                        
                        <div className="icon-container" onClick={this.handleOnHelp}>
                          <Icon>help</Icon>
                        </div>
                      </GridListTile>
                    ))
                  }
                  <GridListTile>
                    <div className="clear-all-container" color="primary">
                      <Icon className="icon">delete</Icon>
                      <label className="text">Clear All</label>
                    </div>                  
                  </GridListTile>
                </GridList>
              </div>
              <div className="result-block">
                <label>Passed images</label>
                <GridList className='grid-list' cellHeight={105} cols={3}>
                  {
                    passedList.map((ph, index) => (
                      <GridListTile
                        key={index}
                      >
                        <img src={ph} alt="" />
                      </GridListTile>
                    ))
                  }
                  <GridListTile>
                    <div className="add-more-container" color="primary">
                      <Icon className="icon">camera_alt</Icon>
                      <label className="text">Add more</label>
                    </div>                  
                  </GridListTile>
                </GridList>
              </div>
            </div>

            <Button component={Link} to="/review/intro" variant="fab" color="secondary" aria-label="Add" className="next-button">
							  <Icon>arrow_forward</Icon>
            </Button>
          </div>
        </div>        
      </div>
    );
  }
}

export default AnalysisResult;
