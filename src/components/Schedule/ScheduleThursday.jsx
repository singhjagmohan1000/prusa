import React, { Component } from "react";
import { scheduleThursday } from "../../actions/index";
import { connect } from "react-redux";
import Moment from 'react-moment';


function mapStateToProps(state) {
  return {
    thursday: state.schedule.schedule_thursday
  };
}
class ScheduleThursday extends Component {

  componentDidMount() {

    this.props.scheduleThursday();
  }


  render() {
    return (
            <tbody>{this.props.thursday.map(thursday =>
                <tr>

                  <td>
                    <Moment
                        format="h:mm A">{new Date('1976/12/12 ' + thursday.time)}</Moment>
                  </td>
                  <td>
                    {thursday.radio_show}
                  </td>
                </tr>
            )}
            </tbody>

    )
  }
}

export default connect(mapStateToProps,{scheduleThursday})(ScheduleThursday);