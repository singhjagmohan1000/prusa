import React from 'react';
import PrusaQuestion from "./PrusaQuestion";
import Result from "./Result";
import { setPoll } from "../../actions";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return { pollQuestion: state.poll.pollQuestion };
};
class Poll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result: false ,
        }
        this.updateResult = this.updateResult.bind(this);

    }
    componentDidMount() {
        this.props.setPoll();
    }


    updateResult = (result) => {this.setState({result})}
    render(){
        return(
            <div className="poll">
                {this.state.result ? <Result /> :  <PrusaQuestion pollQuestion={this.props.pollQuestion} updateResult={this.updateResult}/>}
            </div>

        );
    }
}
export default connect(mapStateToProps,{setPoll})(Poll);