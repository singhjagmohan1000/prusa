import React, { Component } from "react";
import { scheduleThursday } from "../../actions/index";
import { connect } from "react-redux";

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
                    {thursday.show.start_time}
                  </td>
                  <td>
                    {thursday.show.prusa_show.name}
                  </td>
                </tr>
            )}
            </tbody>

    )
  }
}

export default connect(mapStateToProps,{scheduleThursday})(ScheduleThursday);