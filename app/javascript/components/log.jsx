import React from 'react';
import LogEvent from 'components/log_event';

export default class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {log_event_list: this.props.log_events, task_filter: null, result_filter: null};
        this.defaultProps = {log_event_list: []};
    }

    handleTaskTypeFilterChange(ev) {
        if (!ev.target.value) {
            this.setState({task_filter: null});
        } else {
            this.setState({task_filter: ev.target.value});
        }
    }
    
    handleResultTypeFilterChange(ev) {
        if (!ev.target.value) {
            this.setState({result_filter: null});
        } else {
            this.setState({result_filter: ev.target.value});
        }
    }

    renderTaskTypeFilter() {
        return (
            <select className="custom-select" defaultValue={null} onChange={(e) => this.handleTaskTypeFilterChange(e)}>
                <option value="">Фильтр по типу задачи</option>
                <option >task_1</option>
                <option >task_2</option>
                <option >task_3</option>
                <option >task_4</option>
                <option >task_5</option>
            </select>
        );
    }

    renderResultTypeFilter() {
        return (
            <select className="custom-select" defaultValue={null} onChange={(e) => this.handleResultTypeFilterChange(e)}>
                <option value="">Фильтр по результату</option>
                <option >success</option>
                <option >error</option>
            </select>
        );
    }

    render() {
        return (
            <div className="container mt-5">
                <h2>
                    Журнал событий
                </h2>
                {this.renderTaskTypeFilter()}
                {this.renderResultTypeFilter()}
                <hr />
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
                        let duration = le.time_end - le.time_start;
                        let time_start = (new Date(le.time_start * 1000)).toLocaleString('ru');
                        let pass_filter = (this.state.task_filter == null) || (this.state.task_filter == le.task_type);
                        pass_filter = pass_filter && ((this.state.result_filter == null) || this.state.result_filter == le.result_type);

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


