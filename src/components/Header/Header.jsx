import React from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import AudioPlayer from "./AudioPlayer";
import { MenuBar } from "./MenuBar";

export class Header extends React.Component {
  render() {
    const headerStyle={
      margin:"0px"}
    return (
      <div>
        <header>
          <div className="background">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-lg-2 col-xs-2">
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
                </div>
              <div className="col-md-6 col-lg-6 col-xs-6">
                <div className="row visible-lg visible-md ">
                  <div className="col-md-2 col-lg-2 col-xs-2">

                  <h6>Yuba City</h6>
                    <div>1450 AM</div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xs-2">
                    <h6>Sacramento</h6>
                    <div>1470 AM</div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xs-2">
                    <h6>Fresno</h6>
                    <div>1300 AM</div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xs-2">
                    <h6>Bakersfield</h6>
                    <div>1350 AM</div>
                  </div>
                </div>
                {/*<div className="row visible-lg visible-md">*/}
                  {/*<div className="col-md-2 col-lg-2 col-xs-2">*/}
                    {/*<h5>1450 AM</h5>*/}
                  {/*</div>*/}
                  {/*<div className="col-md-2 col-lg-2 col-xs-2">*/}
                    {/*<h5>1470 AM</h5>*/}
                  {/*</div>*/}
                  {/*<div className="col-md-2 col-lg-2 col-xs-2">*/}
                    {/*<h5>1300 AM</h5>*/}
                  {/*</div>*/}
                  {/*<div className="col-md-2 col-lg-2 col-xs-2">*/}
                    {/*<h5>1350 AM</h5>*/}
                  {/*</div>*/}
                {/*</div>*/}
              </div>
                <div className="col-md-4 col-lg-4 col-xs-4 visible-lg visible-md">
              <AudioPlayer />
                </div>
              </div>
              <div className="visible-xs"><AudioPlayer/></div>
              <div style={headerStyle} className="row">
              <MenuBar />
            </div>
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
