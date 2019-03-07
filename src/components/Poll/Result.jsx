import React from 'react';
import Chart from 'react-google-charts';
import {connect} from "react-redux";
import { getResult } from "../../actions/index";


const mapStateToProps = state => {

    return { pollResult: state.poll.pollResult
    };
};
class  Result extends React.Component {

    componentDidMount() {

        this.props.getResult();
    }

    render() {
        if (!this.props.pollResult.prusa_poll_options) {
            return null;
        }
        const chartOptions = {
            backgroundColor: '#e6ecf7',
            title: "Survey",
            is3D: true,
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "#233238",
                    fontSize: 14

                }
            },
            tooltip: {
                showColorCode: true
            },
            chartArea: {
                left: 0,
                top: 0,
                width: "100%",
                height: "80%"
            },
            fontName: "Roboto"
        };

        return (

            <div >
                <Chart
                    chartType="PieChart"
                    data={[[this.props.pollResult.prusa_poll_options.option_1, this.props.pollResult.prusa_poll_options.option_2],
                        [this.props.pollResult.prusa_poll_options.option_1, this.props.pollResult.prusa_poll_results.option_1],
                        [this.props.pollResult.prusa_poll_options.option_2, this.props.pollResult.prusa_poll_results.option_2],
                        [this.props.pollResult.prusa_poll_options.option_3, this.props.pollResult.prusa_poll_results.option_3],
                        [this.props.pollResult.prusa_poll_options.option_4, this.props.pollResult.prusa_poll_results.option_4],

                    ]}
                    options={chartOptions}
                    graph_id="PieChart"
                    width={"100%"}
                    height={"300px"}
                    legend_toggle

                />
            </div>
        );
    }

}

export default connect(mapStateToProps,{getResult})(Result)
