import React from "react";
import { Link } from "react-router-dom";

export class MenuBar extends React.Component {
  render() {
    return (
      <dl className="navbar-main-menu hidden-xs">
        <dt className="item">
          <Link type="button" class="btn-main" to="/">
            <span className="icon flaticon-home" />
          </Link>
        </dt>
        <dd />
        <dt className="item">
          <Link type="button" class="btn-main" to="/schedule">
            Schedule
          </Link>
        </dt>
        <dd />
        <dt className="item">
          <Link type="button" class="btn-main" to="/team">
            Our Team
          </Link>
        </dt>
        <dd />
        <dt className="item">
          <a type="button" className="btn-main" rel="noopener noreferrer"  target="_blank" href="https://google.com">
            Donate
          </a>
        </dt>
        <dd />
        <dt className="item">
          <Link to="/advertise" id="prusa-advertise" type="button" class="btn-main">
            Advertise
          </Link>
        </dt>
        <dd />
        <dt className="item">
          <Link to="/about" type="button" class="btn-main">
            About Us
          </Link>
        </dt>
        <dd />
        <dt className="item">
          <Link to="/contact" type="button" class="btn-main">
            Contact Us
          </Link>
        </dt>
        <dd />
      </dl>
    );
  }
}
