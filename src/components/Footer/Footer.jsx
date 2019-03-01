import React from "react";
import { LeftFooter } from "./LeftFooter";
import CenterFooter from "./CenterFooter";
import RightFooter from "./RightFooter";

export class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      radio_name: "Punjabi Radio USA",
      copyright_year: "2019"
    };
  }
  render() {
    return (
      <footer>
        <section className="footer-navbar">
          <div className="container content nopad-xs">
            <div className="row">
              <LeftFooter />
              <CenterFooter />
              <RightFooter />
            </div>
          </div>
        </section>
        <section className="footer-bottom-block container visible-xs">
          <div className="row">
            <div className="col-sm-5 col-md-4 copyright-text">
              {" "}
              &copy; {this.state.copyright_year} {this.state.radio_name}. All
              Rights Reserved.
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
