import React from "react";

import {ContactForm} from "./ContactForm";

import {AdCarousel} from "./AdCarousel";


export class Advertise extends React.Component {
  render() {

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
