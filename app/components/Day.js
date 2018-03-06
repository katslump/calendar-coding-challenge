import React from 'react';
import TimeSlot from './TimeSlot';

class Day extends React.Component {
    render() {
        let streak = 0
        return (<div style={{display: "inline-flex"}}>
            <div className="timeline">
                <ul className="timeList">
                    <li>9:00 <span className="time">AM</span></li>
                    <li>9:30</li>
                    <li>10:00 <span className="time">AM</span></li>
                    <li>10:30</li>
                    <li>11:00 <span className="time">AM</span></li>
                    <li>11:30</li>
                    <li>12:00 <span className="time">PM</span></li>
                    <li>12:30</li>
                    <li>1:00 <span className="time">PM</span></li>
                    <li>1:30</li>
                    <li>2:00 <span className="time">PM</span></li>
                    <li>2:30</li>
                    <li>3:00 <span className="time">PM</span></li>
                    <li>3:30</li>
                    <li>4:00 <span className="time">PM</span></li>
                    <li>4:30</li>
                    <li>5:00 <span className="time">PM</span></li>
                    <li>5:30</li>
                    <li>6:00 <span className="time">PM</span></li>
                    <li>6:30</li>
                    <li>7:00 <span className="time">PM</span></li>
                    <li>7:30</li>
                    <li>8:00 <span className="time">PM</span></li>
                    <li>8:30</li>
                    <li>9:00 <span className="time">PM</span></li>
                </ul>
            </div>
            <div className="schedule">
                <ul>
                    {
                        this.props.events.map((event, index) => {
                            if ((index < events.length - 1 && events[index + 1].start < event.end) || (index === events.length - 1 && streak > 0) || (streak > 0 && events[index + 1].start > event.end)) {
                                if (streak % 2 === 0) {
                                    streak++;
                                    return (<TimeSlot width={'280px'} event={event} key={event.title}/>);
                                } else {
                                    streak++;
                                    return (<TimeSlot left={'50%'} width={'280px'} event={event} key={event.title}/>);
                                }
                            } else {
                                return (<TimeSlot width={'100%'} event={event} key={event.title}/>);
                            }
                        })
                    };
                </ul>
            </div>
        </div>);
    }
};

export default Day;
