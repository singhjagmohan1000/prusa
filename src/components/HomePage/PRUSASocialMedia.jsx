import React from 'react';

class PRUSAFacebook extends React.Component{

    render(){
        const fbStyle={
            border: "none",
            overflow: "hidden"
        }
        return(
            <div className="col-sm-5 col-lg-4">
                <div className="media-box">
                    <h3><span className="icon flaticon-facebook"></span>  &nbsp; Facebook Page</h3>
                </div>
                <iframe title="fb"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPunjabiRadio%2F&tabs=timeline%2C%20messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1099540060206768"
                        width="400" height="420" style={fbStyle} scrolling="no"
                        frameBorder="2" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
        );
    }
}

class PRUSAYoutube extends React.Component{

    render(){
        const latestvideo={id:
                "punjabiradiousa"}
        return(
            <div className="col-sm-7 col-lg-8">
                <div className="video-box">
                    <h3><span className="icon flaticon-youtube-play"></span>  &nbsp; Latest Video</h3>
                </div>
                <div className="equal-height">
                    <div className="video-responsive">
                        <iframe title="youtube" width="390" height="315"
                                src={"https://www.youtube.com/embed?listType=user_uploads&list="+latestvideo.id} frameBorder="0"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export class PRUSASocialMedia extends React.Component{

    render(){

        return(
            <div className="container content-row">


                <div className="divider-lg"></div>
                <div className="row">
                    <PRUSAFacebook/>
                    <PRUSAYoutube/>

                </div>
            </div>
        );
    }
}