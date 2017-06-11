import React from 'react';

export default class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {log_event_list: this.props.log_events};
        this.defaultProps = {log_event_list:[]};
    }
    render() {
        console.log("Log");
        console.log(this);
        return <h2>
            Log :
        </h2>
    }
}


