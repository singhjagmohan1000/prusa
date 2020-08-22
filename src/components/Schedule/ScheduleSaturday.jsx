  import React, { Component } from "react";
  import { scheduleSaturday } from "../../actions/index";
  import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    saturday: state.schedule.schedule_saturday
  };
}
class ScheduleSaturday extends Component {

    componentDidMount() {

      this.props.scheduleSaturday();
    }

    render() {
      return (

              <tbody>{this.props.saturday.map(saturday =>
              <tr>

                <td>
                  {saturday.show.start_time}
                </td>
                <td>
                  {saturday.show.prusa_show.name}
                </td>
              </tr>
          )}
          </tbody>

      )
    }
  }

  export default connect(mapStateToProps,{scheduleSaturday})(ScheduleSaturday);