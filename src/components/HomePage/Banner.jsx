import React from "react";

export class Banner extends React.Component{

    render() {
        const fm={
            marginLeft: "-25%"
        }
        return(
            <section className="container content-row">
            <div className="banners-row">
                <div className="banner-box" onClick="location.href='#'">
                    <div className="inside">
                        <div className="text-float-right">
                            <div className="inside">
                                <h3 className="upper">1470 AM</h3>
                                <p>KIID Sacramento</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-box" onClick="location.href='#'">
                    <div className="inside">
                        <div className="text-float-right" >
                            <div className="inside">
                                <h3 style={fm} className="upper">1450 AM 96.5 FM</h3>
                                <p>KOBO YubaCity</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-box" onClick="location.href='#'">
                    <div className="inside">
                        <div className="text-float-right">
                            <div className="inside">
                                <h3 className="upper">1300 AM</h3>
                                <p>KIID Fresno</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-box" onClick="location.href='#'">
                    <div className="inside">
                        <div className="text-float-right">
                            <div className="inside">
                                <h3 className="upper">1350 AM</h3>
                                <p>KLHC Bakersfield</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}