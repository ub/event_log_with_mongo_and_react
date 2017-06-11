import React from 'react';
import LogEvent from 'components/log_event';

export default class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {log_event_list: this.props.log_events, task_filter: null};
        this.defaultProps = {log_event_list: []};
    }

    render() {
        console.log("Log");
        console.log(this);
        return (
            <div className="container mt-5">
                <h2>
                    Log :
                </h2>
                <table className='table table-bordered table-sm'>
                    <thead>
                    <tr>
                        <th className="w-10">Хост</th>
                        <th className="w-20">Время</th>
                        <th className="w-10">Длит.</th>
                        <th className="w-10">Тип</th>
                        <th className="w-50">Сообщение</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.log_event_list.map((le) => {
                        console.log(le);
                        console.log(le._id['$oid']);
                        let duration = le.time_end - le.time_start;
                        let time_start = (new Date(le.time_start * 1000)).toLocaleString('ru');
                        let pass_filter = (this.state.task_filter == null) || (this.state.task_filter == le.task_type);
                        return <LogEvent key={le._id['$oid']} host={le.host} result_type={le.result_type}
                                         task_type={le.task_type} time_start={time_start} duration={duration}
                                         hide={!pass_filter}
                                         result_message={le.result_message}/>;
                    })}

                    </tbody>
                </table>
            </div>
        )
    }
}


