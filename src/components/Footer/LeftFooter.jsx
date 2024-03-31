import React from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

export class LeftFooter extends React.Component {
  constructor() {
    super();
    this.state = {
      radio_name: "Punjabi Radio USA"
    };
  }
  render() {
    return (
      <div className="col-sm-4 col-md-4 col-lg-4 hidden-xs  fadeUp">
        <Link to="/">
          <Image cloudName="prusa" publicId="PRUSA_Transparent_LOGO_lhnjhp.png">
            <Transformation height="85" crop="scale" />
          </Image>
        </Link>
        <div>
          &copy; 2010-{new Date().getFullYear()} {this.state.radio_name}.{" "}
          <span className="clearfix visible-sm" />
          All Rights Reserved.
        </div>
        <div className="tabBlock" id="TabBlock-4">
          <ul className="menu">
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
