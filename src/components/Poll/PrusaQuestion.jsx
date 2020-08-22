import React from 'react';
import { connect } from "react-redux";
import { updatePoll } from "../../actions/index";
import {PrusLoader} from "./PrusLoader";

const mapStateToProps = state => {

    return {


    };
};


const mapDispatchToProps = dispatch => {

    return {
        updatePoll: (option) => dispatch(updatePoll(option))

    };
};
class PrusaQuestion extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: "option_1"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        this.setState({
            selectedOption: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.updatePoll({poll:this.props.pollQuestion,option:this.state.selectedOption});
        this.props.updateResult(true);


    }

    render(){
        if (!this.props.pollQuestion.poll_data) {


            return <PrusLoader/>;
        }

return <div className="poll">      <form onSubmit={this.handleSubmit}>
    <strong>{this.props.pollQuestion.poll_data.poll_question}</strong>
    <div className="radio">
        <label>
            <input
                type="radio"
                name="yes"
                value="option_1"
                checked={this.state.selectedOption === "option_1"}
                onChange={this.handleChange}
            />{this.props.pollQuestion.poll_data.poll_options.option_1.option_name}</label>
    </div>
    <div className="radio">
        <label>
            <input
                type="radio"
                name="yes"
                value="option_2"
                checked={this.state.selectedOption === "option_2"}
                onChange={this.handleChange}
            />{this.props.pollQuestion.poll_data.poll_options.option_2.option_name}</label>
    </div>
    <div className="radio">
        <label>
            <input
                type="radio"
                name="yes"
                value="option_3"
                checked={this.state.selectedOption === "option_3"}
                onChange={this.handleChange}
            />{this.props.pollQuestion.poll_data.poll_options.option_3.option_name}</label>
    </div>

    <div className="divider-xs"></div>
    <button className="poll-btn btn contact-btn">Submit</button>
    <div className="divider-xs"></div>

</form>
</div>

}
}

export default connect(mapStateToProps,mapDispatchToProps)(PrusaQuestion);