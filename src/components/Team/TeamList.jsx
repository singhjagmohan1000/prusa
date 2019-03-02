import React, { Component } from "react";
import { getTeam } from "../../actions/index";
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        team: state.team.team
    };
}

class TeamList extends Component {

    componentDidMount() {

        this.props.getTeam();
    }


    render() {
        return (

            <div>{this.props.team.map(team =>
                <div>{team.prusa_team_name}</div>

            )}
            </div>
        )
    }
}
export default connect(mapStateToProps,{getTeam})(TeamList);