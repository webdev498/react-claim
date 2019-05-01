import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import TopMenu from '../topmenu/TopMenu';
import './styles.scss';

class TopNav extends Component {
  state = {
    showMenu: false
  }

  renderTopMenu = () => {
    if (this.state.showMenu) {
      return <TopMenu />
    }
  }

  onClickMore = () => {
    this.setState({
			showMenu: !this.state.showMenu
		});
  }

  render() {
    let content;
    if (this.props.iconName) {
      content = <Icon className="profile-icon">{this.props.iconName}</Icon>;
    }
    else {
      content = <IconButton className="close-button" onClick={this.props.goBack}>
                  <Icon>close</Icon>
                </IconButton>;
    }

    let moreButton;
    if (this.props.hasMore) {
      moreButton = <IconButton className="more-button" onClick={this.onClickMore}>
                    <Icon>more_vert</Icon>
                  </IconButton>;
    }



    return (
      <div className="topnav-wrapper">
        { this.renderTopMenu() }
        <div className="content">
          {moreButton}
          {content}
        </div>
        
      </div>
    );
  }
}

TopNav.propTypes = {
  goBack: PropTypes.func.isRequired
}

export default TopNav;
