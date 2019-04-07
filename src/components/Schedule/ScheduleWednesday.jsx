import React, { Component } from "react";
import { scheduleWednesday } from "../../actions/index";
import { connect } from "react-redux";
import Moment from 'react-moment';


function mapStateToProps(state) {
  return {
    wednesday: state.schedule.schedule_wednesday
  };
}
class ScheduleWednesday extends Component {

  componentDidMount() {

    this.props.scheduleWednesday();
  }


  render() {
    return (
            <tbody>{this.props.wednesday.map(wednesday =>
                <tr>

                  <td>
                    <Moment
                        format="h:mm A">{new Date('1976/12/12 ' + wednesday.time)}</Moment>
                  </td>
                  <td>
                    {wednesday.radio_show}
                  </td>
                </tr>
            )}
            </tbody>)
  }
}

export default connect(mapStateToProps,{scheduleWednesday})(ScheduleWednesday);