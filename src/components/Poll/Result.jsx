import React from 'react';
import Chart from 'react-google-charts';
import {connect} from "react-redux";
import { getResult } from "../../actions/index";
import {PrusLoader} from "./PrusLoader";


const mapStateToProps = state => {

    return { pollResult: state.poll.pollResult
    };
};
class  Result extends React.Component {

    componentDidMount() {

        this.props.getResult();
    }

    render() {
        if (!this.props.pollResult.poll_data) {
            return <PrusLoader/>;
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
                    data={[["Options", "Result"],
                        [this.props.pollResult.poll_data.poll_options.option_1.option_name, this.props.pollResult.poll_data.poll_options.option_1.result],
                        [this.props.pollResult.poll_data.poll_options.option_2.option_name, this.props.pollResult.poll_data.poll_options.option_2.result],
                        [this.props.pollResult.poll_data.poll_options.option_3.option_name,this.props.pollResult.poll_data.poll_options.option_3.result]

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
