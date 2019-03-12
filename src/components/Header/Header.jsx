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
                        publicId="Logo_420_by_85_c7n3rf.png"
                    >
                      <Transformation width="420" height="85" crop="scale" />
                    </Image>
                  </Link>

                </div>
                {/*<div className="visible-lg visible-md ">*/}
                  {/*<div className="col-md-1 col-lg-1 ">*/}

                    {/*<h6>Yuba City</h6>*/}
                    {/*<div>1450 AM</div>*/}
                  {/*</div>*/}
                  {/*<div className="col-md-1 col-lg-1 ">*/}
                    {/*<h6>Sacramento</h6>*/}
                    {/*<div>1470 AM</div>*/}
                  {/*</div>*/}
                  {/*<div className="col-md-1 col-lg-1 ">*/}
                    {/*<h6>Fresno</h6>*/}
                    {/*<div>1300 AM</div>*/}
                  {/*</div>*/}
                  {/*<div className="col-md-1 col-lg-1">*/}
                    {/*<h6>Bakersfield</h6>*/}
                    {/*<div>1350 AM</div>*/}
                  {/*</div>*/}
                {/*</div>*/}
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