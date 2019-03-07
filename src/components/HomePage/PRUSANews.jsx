import React from "react";
import { connect } from "react-redux";
import { getNews } from "../../actions/index";
import Moment from "react-moment";

const mapStateToProps = state => {
    return { news: state.news.news };
};

class PRUSANews extends React.Component {

    componentDidMount() {
        this.props.getNews();
    }
    render() {
        const divStyle = {
            overflow: 'scroll',
            height: '300px'
        };
        const newsStyle={
            marginTop: '25px',
            marginLeft: '-25px'
        }
        return (
            <div style={divStyle}>
            <div  className="news-carousel" style={newsStyle}>{this.props.news.map(news =>
                <div  className="news">
                    <div className="image"><img src="images/liveradio/news-img-1.jpg"
                                                alt=""/></div>

                    <div className="news-date"><Moment
                        format="ddd, DD MMM YYYY">{new Date(news.pubDate)}</Moment></div>
                    <p><a rel="noopener noreferrer" href={news.link} target="_blank" >{news.title}</a></p>
                </div>
            )} </div>
            </div>
        );
    }

}
export default connect(
    mapStateToProps,
    { getNews }
)(PRUSANews);
