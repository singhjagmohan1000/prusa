import React from "react";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";
import { Visit } from "./Visit";
import { Address } from "./Address";
import { ContactForm } from "./ContactForm";

export class Contact extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="media-box">
            <h2>VISIT US HERE</h2>
          </div>
          <div className="row">
            <Visit />
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-6 col-lg-5">
                  <Link to="/">
                    <Image
                      cloudName="prusa"
                      publicId="PRUSA_Transparent_LOGO_lhnjhp.png"
                    >
                      <Transformation width="200" height="100" crop="scale" />
                    </Image>
                  </Link>
                </div>
              </div>
              <div className="divider-sm" />
              <Address />
              <div className="divider-lg" />
              <div className="divider-md" />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
