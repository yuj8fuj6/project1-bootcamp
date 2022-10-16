import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

const calendarComponent = (props) => {

  const localizer = momentLocalizer(moment)

  return (
    <div className="flex justify-center">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="h-screen w-11/12 text-dark-pink text-xs p-3"
      />
    </div>
  );
};

export default calendarComponent;
