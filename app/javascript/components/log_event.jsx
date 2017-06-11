import React from 'react';

export default class LogEvent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props);
        // result_type == 'success|error'
        return (
        <tr>
            <td>{this.props.host}</td>
            <td>{this.props.time_start}</td>
            <td>{this.props.duration}</td>
            <td>{this.props.task_type}</td>
            <td>{this.props.result_message}</td>
        </tr>);
    }

}