  import React, { Component } from "react";
  import { setscheduleMonday } from "../../actions/index";
  import { connect } from "react-redux";
  import Moment from 'react-moment';


  function mapStateToProps(state) {
    return {
      monday: state.schedule.schedule_monday
    };
  }
  class ScheduleMonday extends Component {

    componentDidMount() {

      this.props.setscheduleMonday();
    }


    render() {
      return (

              <tbody>{this.props.monday.map(monday =>
              <tr>

                <td>
                  <Moment
                      format="h:mm A">{new Date('1976/12/12 ' + monday.time)}</Moment>
                </td>
                <td>
                  {monday.radio_show}
                </td>
              </tr>
          )}
          </tbody>

      )
    }
  }

  export default connect(mapStateToProps,{setscheduleMonday})(ScheduleMonday);