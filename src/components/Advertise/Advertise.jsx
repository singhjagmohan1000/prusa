import React from "react";
import {Image, Transformation} from "cloudinary-react";
import {ContactForm} from "./ContactForm";
import {CoverageCarousel} from "./CoverageCarousel";
import {MediaKit} from "./MediaKit";
import {AdCarousel} from "./AdCarousel";


export class Advertise extends React.Component {
  render() {
    const zone={
      marginBottom:"20px"

    }
    return (
        <div>
            <AdCarousel/>

        <div className="container content">

          <div className="col-md-10">

            <ContactForm />
          </div>
        </div>
        </div>
    );
  }
}
