import React from "react";
import {Image, Transformation} from "cloudinary-react";
import {AppDownload} from "../HomePage/AppDownload";


export class Listen extends React.Component {
  render() {
    const line={
      "width":"75%",
      "text-align":"centre",
      "margin-left":"12%"
    }
    const appStyle = {
      height: '275px'
    };
    const appMargin={
      marginTop:'25px',
      marginLeft: "40%"
    }
    const gbadgeMargin={
      marginLeft: "40%",
    }
    return (
      <div className="content">
        <div className="container">


          <div className="prusa_about">

            <div className="row">
              <p>
                We pride ourselves in connecting with our listeners all over the world. This means we do our best to provide many ways of tuning into our programs. Below are all the different ways one can listen to Punjabi Radio USA:
              </p>
              <div className="radioset">
              <Image cloudName="prusa" className="img-responsive" publicId="radio42.png">
                <Transformation height="100"  width="100"  crop="scale"/>
              </Image>
                <h4>Radio Set</h4>

              </div>
              <p>
                {" "}
                If you live in our coverage areas in California, you can purchase a radio set from our local sellers. We also have Wifi/Internet Radio Set, you can listen Punjabi Radio USA program through these anywhere in the world. Please call us at: (408) 272-5200 to find out the nearest store to get a radio.
              </p>
              <hr style={line}></hr>
              <div className="app">
                <h2><span className="icon flaticon-mobile"></span>  &nbsp; Download  App</h2>
              </div>
              <div style={appStyle}>
                <div style={appMargin} id="ios-store" className="app-download">

                  <a href="https://itunes.apple.com/us/app/punjabi-radio-usa/id653916981?mt=8"> <AppDownload/></a>
                </div>
                <br/><br/>
                <div style={gbadgeMargin} id="google-play" className="app-download">
                  <a href='https://play.google.com/store/apps/details?id=com.twis.punjabiradio&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' width="200" height="80" src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
                </div>
              </div>
              <p>
                {" "}
                If you have a smartphone, Iphone or Android, you can download our FREE mobile app that streams our programming as well as Gurbani Radio, NonStop Punjabi music, and Hindi Hits.
              </p>
              <hr style={line}></hr>
              <div className="app">
                <h2><span className="icon flaticon-phone"></span>  &nbsp; Call to Listen</h2>
              </div>
              <p>
                {" "}
                You can listen live or hear recorded news simply by calling one of the following numbers:
                USA: 774.337.6004 or 360.398.4444 | UK: +44.330.606.9825 |
                Germany: 511.80.90.40.41 | Australia: +61.2.8080.5601 | France: 33.18.01.42.595
              </p>
              <hr style={line}></hr>
              <div className="app">
                <h2><span className="icon flaticon-podcast6"></span>  &nbsp; Listen In Your Car</h2>
              </div>
              <p>
                {" "}
                YUBA CITY area, 1450 AM and 96.5 FM.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;SACRAMENTO area 1470 AM and 105.9 FM. <br/>
                FRESNO area, 1300 AM and 104.5 FM.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;LODI/STOCKTON area 1570 AM.<br/>

                &nbsp;&nbsp;BAKERSFIELD area, 1350 AM and 105.7 FM.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
