import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TopNav from '../../components/topnav/TopNav';
import ClaimList from './scenes/claims-list/ClaimsList';
import './styles.scss';
import VechicleInfo from './scenes/vehicle-info/VehicleInfo';
import EnterVin from './scenes/enter-vin/EnterVin';
import Instruction from './scenes/instruction/Instruction';
import PhotoTips from './scenes/photo-tips/PhotoTips';
import PhotoUpload from './scenes/photo-upload/PhotoUpload';
import Analyzing from './scenes/analyzing/Analyzing';
import AnalysisResult from './scenes/analysis-result/AnalysisResult';
import AnalysisResultWhy from './scenes/analysis-result/scenes/analysis-result-why/AnalysisResultWhy';
import ReviewIntro from './scenes/review-intro/ReviewIntro';
import Review from './scenes/review/Review';
import EditPart from './scenes/edit-part/EditPart';
import EditDamage from './scenes/edit-damage/EditDamage';
import AddDamage from './scenes/add-damage/AddDamage';
import Report from './scenes/report/Report';

class Home extends Component {
    renderNavBar() {
      if (this.props.location.pathname !== '/404') {
        return <TopNav goBack={() => this.props.history.goBack()}/>
      }
    }

    render() {
      // If not signed in, redirect to login page
      if (!this.props.auth.currentUser) {
        return (
          <Redirect 
            to={{
              pathname: '/login'
            }}
          />
        );
      }

      // If '/' redirect to home page
      if (this.props.location.pathname === '/') {
        return (
          <Redirect
            to={{
              pathname: '/home'
            }}
          />
        )
      }


      return (
        <div id="home" className="home-wrapper">
          <div className="sceneContainerClass">
            <Switch>
              <Route path="/home" exact render={ (props) => <ClaimList {...props} />} />
              <Route path="/claims" exact render={ (props) => <ClaimList {...props} />} />
              <Route path="/vehicle-info" exact render={ (props) => <VechicleInfo {...props} />} />
              <Route path="/enter-vin" exact render={ (props) => <EnterVin {...props} />} />
              <Route path="/instruction" exact render={ (props) => <Instruction {...props} />} />
              <Route path="/photo-tips" exact render={ (props) => <PhotoTips {...props} />} />
              <Route path="/photo-upload" exact render={ (props) => <PhotoUpload {...props}/> } />
              <Route path="/analyzing" exact render={ (props) => <Analyzing {...props} />} />
              <Route path="/analysis-results/why/:id" render={ (props) => <AnalysisResultWhy {...props} /> } />
              <Route path="/analysis-results" exact render={ (props) => <AnalysisResult {...props} />} />
              <Route path="/review/intro" exact render={ (props) => <ReviewIntro {...props} />} />
              <Route path="/review" render={ (props) => <Review {...props} />} />
              <Route path="/edit-part" render={ (props) => <EditPart {...props} action="Edit"/>} />
              <Route path="/edit-damage" render={ (props) => <EditDamage {...props} action="Edit" />} />
              <Route path="/add-damage-part" render={ (props) => <EditPart {...props} action="Add"/>} />
              <Route path="/add-damage-type" render={ (props) => <EditDamage {...props} action="Add" />} />
              <Route path="/add-damage" render={ (props) => <AddDamage {...props} />} />           
              <Route path="/report" render={ (props) => <Report {...props} />} />

              <Redirect to='/404' />
            </Switch>
          </div>
        </div>
      );
    }
  }

  Home.defaultProps = {
    auth: { currentUser : [] }
  }
  
  export default Home;
  