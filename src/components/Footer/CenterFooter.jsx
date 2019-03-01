import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setRadioName } from "../../actions/index";

const mapStateToProps = state => {
  return { radio_name: state.footer.radio_name };
};

class CenterFooter extends React.Component {
  componentDidMount() {
    this.props.setRadioName();
  }
  render() {
    return (
      <div className="col-sm-4 col-md-4  collapsed-block  fadeUp">
        <h4>
          {this.props.radio_name}
          <a className="expander visible-xs" href="#TabBlock-4">
            +
          </a>
        </h4>
        <div className="tabBlock" id="TabBlock-4">
          <ul className="menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/advertise">Advertise</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { setRadioName }
)(CenterFooter);
