import React from "react";
import { connect } from "react-redux";
import { setAddress } from "../../actions/index";

const mapStateToProps = state => {
  return { address: state.footer.address };
};

class RightFooter extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: {
        daytime: "(408) 272-5200,",
        mobile: "(408) 722-7698"
      },
      email: "info@punjabiradiousa.com"
    };
  }
  componentDidMount() {
    this.props.setAddress();
  }
  render() {
    return (
      <div className="col-sm-4 col-md-4 collapsed-block  fadeUp">
        <h4>
          Contact Us
          <a className="expander visible-xs" href="#TabBlock-6">
            +
          </a>
        </h4>
        <div className="tabBlock" id="TabBlock-6">
          <ul className="menu">
            <li>
              <span className="icon flaticon-home" />{" "}
              {this.props.address.street} {this.props.address.city}{" "}
              {this.props.address.state}
            </li>
            <li>
              <span className="icon flaticon-phone" />{" "}
              {this.state.phone.daytime} {this.state.phone.mobile}
            </li>
            <li>
              <span className="icon flaticon-mail" />{" "}
              <a href="mailto:info@punjabiradiousa.com">{this.state.email}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { setAddress }
)(RightFooter);
