  import React, { Component } from "react";
  import { scheduleFriday } from "../../actions/index";
  import { connect } from "react-redux";
  import Moment from 'react-moment';


  function mapStateToProps(state) {
    return {
      friday: state.schedule.schedule_friday
    };
  }
  class ScheduleFriday extends Component {

    componentDidMount() {

      this.props.scheduleFriday();
    }


    render() {
      return (
              <tbody>{this.props.friday.map(friday =>
              <tr>

                <td>
                  <Moment
                      format="h:mm A">{new Date('1976-12-12 ' + friday.time)}</Moment>
                </td>
                <td>
                  {friday.radio_show}
                </td>
              </tr>
          )}
          </tbody>
      )
    }
  }

  export default connect(mapStateToProps,{scheduleFriday})(ScheduleFriday);