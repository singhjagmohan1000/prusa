import React, { Component } from "react";
import { scheduleWednesday } from "../../actions/index";
import { connect } from "react-redux";

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
                    {wednesday.show.start_time}
                  </td>
                  <td>
                    {wednesday.show.prusa_show.name}
                  </td>
                </tr>
            )}
            </tbody>)
  }
}

export default connect(mapStateToProps,{scheduleWednesday})(ScheduleWednesday);