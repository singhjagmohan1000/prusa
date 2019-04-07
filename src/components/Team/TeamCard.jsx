import React from 'react';
import { getTeam } from "../../actions/index";
import { connect } from "react-redux";
import ReactCardFlip from 'react-card-flip';
import {Image} from "cloudinary-react";


function mapStateToProps(state) {
    return {
        team: state.team.team,

    };

}
class TeamCard extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: {},
            activeItem: -1
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleActiveItem = this.toggleActiveItem.bind(this);
    }

    componentDidMount() {
        this.props.getTeam();

    }

    handleClick(e) {
        e.preventDefault();

        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    toggleActiveItem(index){

        this.setState({
            isFlipped: {[index]:!this.state.isFlipped[index]}
        });

    }

    render() {

        const imgStyle = {
            maxWidth: "100%",
            maxHeight: "200px"
        }
        const cardStyle = {
            maxWidth: "302px"
        }
        const prbtn={
            marginLeft: "8%"
        }

        return (
            <div className="team-container">
                <div className="container">
                    <div className="row ">{this.props.team.map((member,index) =>
                        <div className="col-lg-4  col-md-4">
                            <div className="card-container">
                                <div className="team-card">
                                    <div className="card" style={cardStyle} onClick={() => this.toggleActiveItem(index)} >
                                            <ReactCardFlip isFlipped= {this.state.isFlipped[index]} flipSpeedBackToFront={1.5}
                                                           flipSpeedFrontToBack={1.5}>

                                                <div key="front">
                                                    <div className="front">
                                                        <Image className="card-img-top img-responsive" style={imgStyle} alt="Card cap" cloudName="prusa" publicId={member.prusa_team_image_id}>
                                                        </Image>

                                                        <div className="card-block">
                                                            <h3 className="name">{member.prusa_team_name}</h3>
                                                            <p className="profession">{member.prusa_team_profession}</p>
                                                            <p className="card-text prusa-card">{member.prusa_team_hometown}</p>
                                                            <p className="card-text prusa-card">{member.prusa_team_education}</p>
                                                            <button style={prbtn} className="btn btn-simple prusa-card" onClick={this.handleClick}><i className="fa fa-repeat"></i> Click Here For More Information
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div key="back">

                                                    <div className="front">
                                                        <div className="card-header">
                                                            <h5 className="motto">{member.prusa_team_mission}</h5>
                                                        </div>
                                                        <div className="content">
                                                            <div className="main">
                                                                <h4 className="text-center">Shows</h4>
                                                                <p className="text-center">{member.prusa_show}</p>

                                                                <div className="stats-container">
                                                                    <div className="stats">
                                                                        <h4>235</h4>
                                                                        <p>
                                                                            Followers
                                                                        </p>
                                                                    </div>
                                                                    <div className="stats">
                                                                        <h4>114</h4>
                                                                        <p>
                                                                            Following
                                                                        </p>
                                                                    </div>
                                                                    <div className="stats">
                                                                        <h4>35</h4>
                                                                        <p>
                                                                            Projects
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="footer">
                                                            <button className="btn btn-simple"  onClick={this.handleClick}>
                                                                <i className="fa fa-undo"></i> Back
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ReactCardFlip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}</div>

                </div>
            </div>


        );
    }
}
export default connect(mapStateToProps,{getTeam})(TeamCard);