import React from 'react';

export default class LogEvent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props);
        let bg_class = this.props.result_type == 'error' ? 'bg-danger' : 'bg-success';
        return (
        <tr className={bg_class}>
            <td>{this.props.host}</td>
            <td><small>{this.props.time_start}</small></td>
            <td>{this.props.duration}</td>
            <td>{this.props.task_type}</td>
            <td>{this.props.result_message}</td>
        </tr>);
    }

}