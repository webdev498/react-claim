import React, { Component } from 'react';
import Title from '../../../../components/title/Title';
import TopNav from '../../../../components/topnav/TopNav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './styles.scss';

class Report extends Component {

  render() {
    const car = {
      name: 'Mercedes Benz',
      type: 'C-class, 2014',
      claimID: 'DSFL3249LL',
    };

    const report_date = [{
      part: 'Rear bumber',
      damages: [
        'Dent',
        'Gouge',
        'Scuff',
        'Scratch'
      ],
      todo: 'Replace',
      cost: 600
    }, {
      part: 'Rear quarter panel',
      damages: [
        'Dent',
        'Scuff'
      ],
      todo: 'Replace',
      cost: 600
    }]

    let total_cost = 0;
    report_date.forEach(rd => total_cost += rd.cost);
    
    return (
      <div className="report-wrapper">
        <div className="content">
          <TopNav 
            backType="backward" 
            narrow
            goBack={() => this.props.history.goBack()}
          />
          <div className="report-container">            
            <Title title="Cost estimation" />
            <div className="car-specs">
              <div className="info">
                <label className="name">{car.name}</label>
                <label className="type">{car.type}</label>
              </div>
              <div className="claim">
                <label className="id">{car.claimID}</label>
              </div>
            </div>
            <div className="car-report-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Part</TableCell>
                    <TableCell>Damage</TableCell>
                    <TableCell>To do</TableCell>
                    <TableCell align="right">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {report_date.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.part}
                        </TableCell>
                        <TableCell>
                          {
                            row.damages.map(damage => <label>{damage}<br /></label>)
                          }
                        </TableCell>
                        <TableCell>{row.todo}</TableCell>
                        <TableCell align="right">
                        {"$" + row.cost.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,')}</TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell component="th" scope="row" colSpan={3}>
                      Total Cost
                    </TableCell>                    
                    <TableCell align="right">
                    {"$" + total_cost.toString().replace(/\d(?=(\d{3}))/g, '$&,')}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="download">
              <div className="download-as">
                <div>Download as PDF</div>
              </div>
              <div className="download-as">
                <div>Download as XLS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;