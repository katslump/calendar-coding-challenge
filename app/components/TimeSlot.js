import React from 'react';
import ReactDOM from 'react-dom';

class TimeSlot extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <li className="positioner" style={{left: this.props.left, width: this.props.width, top: this.props.event.start, height: parseInt(this.props.event.end) - parseInt(this.props.event.start)}} key={this.props.event.title}>
                <h1>{this.props.event.title}</h1>
                <p>{this.props.event.location}</p>
            </li>
        </div>);
    }
};

export default TimeSlot;
