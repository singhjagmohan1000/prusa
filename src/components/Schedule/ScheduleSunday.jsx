import React, { Component } from "react";
import { scheduleSunday } from "../../actions/index";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    sunday: state.schedule.schedule_sunday
  };
}
class ScheduleSunday extends Component {

  componentDidMount() {

    this.props.scheduleSunday();
  }


  render() {
    return (

            <tbody>{this.props.sunday.map(sunday =>
                <tr>

                  <td>
                    {sunday.show.start_time}
                  </td>
                  <td>
                    {sunday.show.prusa_show.name}
                  </td>
                </tr>
            )}
            </tbody>

    )
  }
}

export default connect(mapStateToProps,{scheduleSunday})(ScheduleSunday);