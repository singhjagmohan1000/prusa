import React from 'react';
import {AppDownload} from "./AppDownload";
import Poll from "../Poll/Poll";
import PRUSANews from "./PRUSANews";

export class PRUSAInfoBox extends React.Component{


    render(){
        const appStyle = {
            height: '275px'
        };
        const appMargin={
            marginTop:'25px',
            marginLeft: '70px'
        }
        const gbadgeMargin={
            marginLeft: '75px'
        }
        const abadgeMargin={
            marginLeft: '85px',
            marginTop: '5px'
        }
        return(
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4  fadeUp info-box">
                            <div className="inside">
                                <h3>US News</h3>
                                <PRUSANews/>
                            </div>
                        </div>
                        <div className="col-sm-4  fadeUp info-box">
                            <div className="inside">

                            <h3><span className="icon flaticon-mobile"></span>  &nbsp; Download  App</h3>
                            <div style={appStyle}>
                                <div style={appMargin} id="ios-store" className="app-download">

                                    <a href="https://itunes.apple.com/us/app/punjabi-radio-usa/id653916981?mt=8"> <AppDownload/></a>
                                </div>

                                <div style={gbadgeMargin} id="google-play" className="app-download">
                                    <a href='https://play.google.com/store/apps/details?id=com.twis.punjabiradio&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' width="200" height="80" src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
                                </div>

                                <div style={abadgeMargin} id="amazon-alexa" className="app-download">
                                    <img className="app-download" alt="Just Ask Alexa" width="180" src="images/liveradio/askBadge.png"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4  fadeUp info-box">

                                <h3>Pole of the Week</h3>
                                <Poll/>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}