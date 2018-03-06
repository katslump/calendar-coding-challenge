import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const events = [
    {start: 30, end: 150, title: "Workout", location: "SF Fitness"},
    {start: 340, end: 500, title: "TA Meeting", location: "Horizons"},
    {start: 400, end: 520, title: "Code Review", location: "Horizons"},
    {start: 540, end: 600, title: "Lunch", location: "Azucar Lounge"},
    {start: 560, end: 620, title: "Coffee Break", location: "Blue Bottle"},
    {start: 610, end: 670, title: "Meeting", location: "Horizons"}
];

function layOutDay(events) {
    ReactDOM.render(
        <App events={events}/>,
      document.getElementById('root')
    );
};

window.layOutDay = layOutDay;
window.events = events;
