import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../../../components/topnav/TopNav';
import Title from '../../../../components/title/Title';
import './styles.scss';
import { GridList, GridListTile } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class PhotoUpload extends Component {
  constructor() {
    super();

    this.state = {
      photoCount: 0,
      photoSrcList: [],
    }
  }

  handleInitialAdd = () => {
    this.setState({
      photoCount: 2,
      photoSrcList: {
        type: 'upload',
        srcList: [
          'images/pass_1.png',
          'images/pass_2.png',
        ]
      }
    })
  }

  render() {
    return (
      <div className="photo-upload-wrapper">        
        {
          !this.state.photoCount 
          && 
          <div className="content">
            <TopNav iconName="camera_alt" goBack={() => this.props.history.goBack()}/>
            <Title title='Photo upload'
              subtitle='Take photos or upload them from your library.'
            />
            <div className="photo-upload-container">
              <Button variant="fab" color="secondary" aria-label="Add" className="next-button" onClick={this.handleInitialAdd}>
                <Icon>add</Icon>
              </Button>
            </div>
          </div>
        }
        {
          this.state.photoCount > 0
          && 
          <div className="content">
            <TopNav backType='backward' narrow goBack={() => this.props.history.goBack()}/>
            <Title title='Photo upload' />
            <div className="photo-upload-container">          
              <div className="photo-grid">
                {/* <CarGridList className='grid-list' cellHeight={120} cols={3} data={this.state.photoSrcList} /> */}
                <GridList className='grid-list' cellHeight={105} cols={3}>
                  {
                    this.state.photoSrcList.srcList.map((ph, index) => (
                      <GridListTile
                        key={index}
                      >
                        <img src={ph} alt=""/>
                        <div className="icon-container">
                          <Icon>delete</Icon>
                        </div>
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
              <Button component={Link} to="/analyzing" variant="fab" color="secondary" aria-label="Add" className="next-button">
							  <Icon>arrow_forward</Icon>
						  </Button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default PhotoUpload;