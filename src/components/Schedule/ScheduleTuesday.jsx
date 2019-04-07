import React, { Component } from "react";
import { scheduleTuesday } from "../../actions/index";
import { connect } from "react-redux";
import Moment from 'react-moment';


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
                    <Moment
                        format="h:mm A">{new Date('1976/12/12 ' + tuesday.time)}</Moment>

                  </td>
                  <td>
                    {tuesday.radio_show}
                  </td>
                </tr>
            )}
            </tbody>
    )
  }
}

export default connect(mapStateToProps,{scheduleTuesday})(ScheduleTuesday);