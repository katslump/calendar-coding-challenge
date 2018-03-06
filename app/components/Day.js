import React from 'react';
import TimeSlot from './TimeSlot';

let events = [
    {start: 30, end: 150, title: "Workout", location: "SF Fitness"},
    {start: 340, end: 500, title: "TA Meeting", location: "Horizons"},
    {start: 400, end: 520, title: "Code Review", location: "Horizons"},
    {start: 540, end: 600, title: "Lunch", location: "Azucar Lounge"},
    {start: 560, end: 620, title: "Coffee Break", location: "Blue Bottle"},
    {start: 610, end: 670, title: "Meeting", location: "Horizons"}
];

let streak = 0;

class Day extends React.Component {
  render() {
    return (
      <div className="schedule">
          <em>Calendar</em>
          <ul>
              {events.map((event, index) => {
                  if ((index < events.length-1 && events[index+1].start < event.end) || (index === events.length-1 && streak > 0) || (streak > 0 && events[index+1].start > event.end)) {
                        if(streak % 2 === 0) {
                            streak++;
                            return (<TimeSlot width={'280px'} event={event} key={event.title}/>);
                        } else {
                            streak++;
                            return (<TimeSlot left={'50%'} width={'280px'} event={event} key={event.title}/>);
                        }
                  } else {
                      return(<TimeSlot width={'100%'} event={event} key={event.title}/>);
                  }
              })};
          </ul>
      </div>
    );
  }
};

export default Day;
