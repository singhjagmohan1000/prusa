import React from "react";
import { MEDIAURL } from "../../constants";
export class MediaKit extends React.Component{

    downloadRandomImage = () => {

        fetch(`${MEDIAURL}`)
            .then(response => {
                //Create a Blob from the PDF Stream
                console.log("file d");
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        const myh2={
                margin: "0",
        padding: "0 0 1.3em",
        fontSize: "1.538em",
            color: "#000e34",
        textTransform: "uppercase"

        }

    return(
        <section className="content nopad-xs grey-box">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6  col-lg-6 newsletter collapsed-block">
                        <div className="row">
                            <div className="col-lg-5  col-md-12 col-sm-12 ">
                                <h2 style={myh2}>MEDIA KIT <a className="expander visible-xs" href="#TabBlock-1">+</a></h2>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 tabBlock" id="TabBlock-1">
                                <p>To know more about advertising zones, Download our Media Kit</p>

                                    <div className="form-group">
                                        <a  className="btn btn-success" href={MEDIAURL} >Download</a>
                                    </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 collapsed-block">
                        <h2 style={myh2}>FIND US ON<a className="expander visible-xs" href="#TabBlock-2">+</a></h2>
                        <div className="tabBlock" id="TabBlock-2">
                            <ul className="find-us">
                                <li className="divider"><a rel="noopener noreferrer"  target="_blank" href="https://www.facebook.com/PunjabiRadio/" className="animate-scale"><span
                                    className="icon icon-facebook flaticon-facebook"></span></a></li>
                                <li className="divider"><a rel="noopener noreferrer"  target="_blank" href="https://www.instagram.com/punjabiradiousa/" className="animate-scale"><span
                                    className="icon icon-instagram flaticon-instagramm"></span></a></li>
                                <li className="divider"><a rel="noopener noreferrer"  target="_blank" href="https://www.youtube.com/user/punjabiradiousa" className="animate-scale"><span
                                    className="icon icon-youtube flaticon-youtube"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
    }
}
