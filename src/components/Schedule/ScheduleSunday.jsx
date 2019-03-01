import React, { Component } from "react";
import { scheduleSunday } from "../../actions/index";
import { connect } from "react-redux";
import Moment from 'react-moment';


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
                    <Moment
                        format="h:mm A">{new Date('1976-12-12 ' + sunday.time)}</Moment>
                  </td>
                  <td>
                    {sunday.radio_show}
                  </td>
                </tr>
            )}
            </tbody>

    )
  }
}

export default connect(mapStateToProps,{scheduleSunday})(ScheduleSunday);