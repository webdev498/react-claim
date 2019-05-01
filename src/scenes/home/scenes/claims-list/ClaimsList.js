import React, { Component } from 'react';
import Title from '../../../../components/title/Title';
import ClaimItem from './components/claim-item/ClaimItem';
import TopNav from '../../../../components/topnav/TopNav';

class ClaimsList extends Component {
    render() {
      return (
        <div className="claims-list-container">
          <TopNav iconName="list_alt" hasMore/>
          <div className="content">
            <Title title='My Claims'/>
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={0} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={1} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />
            <ClaimItem model="Mercedes Benz" class="C-class" year="2014" vin="SDFSAFD212" claim_status={2} />

          </div>
        </div>
      );
    }
}
  
export default ClaimsList;
