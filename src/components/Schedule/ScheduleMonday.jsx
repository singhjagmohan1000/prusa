  import React, { Component } from "react";
  import { scheduleMonday } from "../../actions/index";
  import { connect } from "react-redux";

  function mapStateToProps(state) {

    return {
      monday: state.schedule.schedule_monday
    };
  }
  class ScheduleMonday extends Component {

    componentDidMount() {

      this.props.scheduleMonday();
    }

    render() {
      return (

              <tbody>{this.props.monday.map(monday =>
              <tr>

                <td>
                  {monday.show.start_time}
                </td>
                <td>
                  {monday.show.prusa_show.name}
                </td>
              </tr>
          )}
          </tbody>

      )
    }
  }

  export default connect(mapStateToProps,{scheduleMonday})(ScheduleMonday);