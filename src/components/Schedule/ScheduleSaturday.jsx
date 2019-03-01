import React, { Component } from "react";
import { scheduleSaturday } from "../../actions/index";
import { connect } from "react-redux";
import Moment from 'react-moment';


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
                    <Moment
                        format="h:mm A">{new Date('1976-12-12 ' + saturday.time)}</Moment>
                  </td>
                  <td>
                    {saturday.radio_show}
                  </td>
                </tr>
            )}
            </tbody>

    )
  }
}

export default connect(mapStateToProps,{scheduleSaturday})(ScheduleSaturday);