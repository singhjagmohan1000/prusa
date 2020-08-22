import React from 'react';
import {Tab, Table, Tabs} from 'react-bootstrap';
import ScheduleMonday from './ScheduleMonday';
import ScheduleTuesday from './ScheduleTuesday';
import ScheduleWednesday from './ScheduleWednesday';
import ScheduleThursday from './ScheduleThursday';
import ScheduleFriday from './ScheduleFriday';
import ScheduleSaturday from './ScheduleSaturday';
import ScheduleSunday from './ScheduleSunday';

export class Schedule extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

  render() {


      return (

          <div className="content">
            <div className="container">
              <h1>Our Shows</h1>
              <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({key})}>
                  <Tab eventKey="monday" title="Monday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleMonday/>
                      </Table>
                  </Tab>

                  <Tab eventKey="tuesday" title="Tuesday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleTuesday/>
                      </Table>
                  </Tab>
                  <Tab eventKey="wednesday" title="Wednesday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleWednesday/>
                      </Table>
                  </Tab>
                  <Tab eventKey="thursday" title="Thursday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleThursday/>
                      </Table>
                  </Tab>
                  <Tab eventKey="friday" title="Friday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleFriday/>
                      </Table>
                  </Tab>
                  <Tab eventKey="saturday" title="Saturday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleSaturday/>
                      </Table>
                  </Tab>
                  <Tab eventKey="sunday" title="Sunday">

                      <Table striped bordered hover variant="dark">
                          <thead>
                          <tr>
                              <th>Start Time</th>
                              <th>Show</th>
                          </tr>
                          </thead>
                          <ScheduleSunday/>
                      </Table>
                  </Tab>
              </Tabs>

            </div>
          </div>


      );

  }
}