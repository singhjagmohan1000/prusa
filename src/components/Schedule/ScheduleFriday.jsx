  import React, { Component } from "react";
  import { scheduleFriday } from "../../actions/index";
  import { connect } from "react-redux";

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
                  {friday.show.start_time}
                </td>

                <td>
                  {friday.show.prusa_show.name}
                </td>
              </tr>
          )}
          </tbody>
      )
    }
  }

  export default connect(mapStateToProps,{scheduleFriday})(ScheduleFriday);