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
            Team
          </Link>
        </dt>
          <dt className="item">
              <Link type="button" class="btn-main" to="/listen">
                  Ways To Listen
              </Link>
          </dt>
        <dd />
        <dt className="item">
          <a type="button" className="btn-main" rel="noopener noreferrer"  target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@punjabiradiousa.com&item_name=Punjabi+Radio+USA">
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
        <dt className="item">
          <Link to="/privacy" type="button" class="btn-main">
            Privacy Policy
          </Link>
        </dt>
        <dd/>
      </dl>
    );
  }
}
