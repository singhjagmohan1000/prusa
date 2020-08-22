import React, { Component } from "react";
import { scheduleTuesday } from "../../actions/index";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
   tuesday: state.schedule.schedule_tuesday
  };
}
class ScheduleTuesday extends Component {

  componentDidMount() {
    this.props.scheduleTuesday();
  }


  render() {
    return (
            <tbody>{this.props.tuesday.map(tuesday =>
                <tr>

                  <td>
                    {tuesday.show.start_time}
                  </td>
                  <td>
                    {tuesday.show.prusa_show.name}
                  </td>
                </tr>
            )}
            </tbody>
    )
  }
}

export default connect(mapStateToProps,{scheduleTuesday})(ScheduleTuesday);