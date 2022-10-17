import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import uuid from "react-uuid";

const CalendarComponent = (props) => {
  console.log(props);
  const data = props.medicineData;
  const moodData = props.moodData;
  // console.log (data);
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  let tempEvents = [];
  useEffect(() => {
    data.forEach((element) => {
      const dataDose = {
        title: `${element.medicineName} , ${element.medicineQtyOne} pills`,
        id: uuid(),
        isMedicine: true,
        start: moment(
          `${element.medicineDate} ${element.medicineTime}`,
        ).toDate(),
        end: moment(`${element.medicineDate} ${element.medicineTime}`)
          .add(1, "second")
          .toDate(),
      };
      tempEvents.push(dataDose);
    });

    moodData.forEach((element) => {
      const dataMood = {
        title: `${element.mood} Mood`,
        id: uuid(),
        start: moment(`${element.moodDate} ${element.moodTime}`).toDate(),
        end: moment(`${element.moodDate} ${element.moodTime}`)
          .add(1, "second")
          .toDate(),
      };
      tempEvents.push(dataMood);
    });
    setEvents(tempEvents);
  }, [data, moodData]);

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

export default CalendarComponent;
