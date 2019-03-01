import React from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import AudioPlayer from "./AudioPlayer";
import { MenuBar } from "./MenuBar";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="background">
            <div className="container">
              <div className="navbar-logo pull-left visible-md visible-lg">
                <Link to="/">
                  <Image
                    cloudName="prusa"
                    publicId="PRUSA_Transparent_LOGO_lhnjhp.png"
                  >
                    <Transformation width="150" height="85" crop="scale" />
                  </Image>
                </Link>
              </div>
              <AudioPlayer />
              <MenuBar />
            </div>
          </div>

          <div className="container visible-xs">
            <div className="mobile-nav row">
              <div className="nav-item item-01">
                <div id="off-canvas-menu-toggle">
                  <span className="icon flaticon-menu-1" />
                </div>
              </div>
              <div className="nav-item item-02">
                <div />
              </div>
              <div className="nav-item item-03">
                <div />
              </div>
              <div className="nav-item item-04">
                <div>
                  <span className="nav-item item-04" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
