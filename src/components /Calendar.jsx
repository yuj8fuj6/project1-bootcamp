import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import uuid from "react-uuid";

const CalendarComponent = (props) => {
  // console.log(props);
  const data = props.medicineData;
  const moodData = props.moodData;
  // console.log (data);
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(undefined);

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
        value: element.id,
        isMedicine: false,
        start: moment(`${element.moodDate} ${element.moodTime}`).toDate(),
        end: moment(`${element.moodDate} ${element.moodTime}`)
          .add(1, "second")
          .toDate(),
      };
      tempEvents.push(dataMood);
    });
    setEvents(tempEvents);
  }, [data, moodData]);

  const eventPropGetter = (event, start, end, isSelected) => {
    // console.log(event);
    let newStyle = {
      backgroundColor: "#f59e0b",
      colour: "white",
      borderRadius: "2px",
      border: "none",
    };

    if (event.isMedicine) {
      newStyle.backgroundColor = "#14b8a6";
    }
    return {
      className: "",
      style: newStyle,
    };
  };

  const handleSelectedEvent = (event) => {
    setSelectedEvent(event);
  };

  // console.log(selectedEvent)
  return (
    <div className="grid justify-items-center grid-cols-1 h-max">
      {selectedEvent &&
        alert(`${selectedEvent.title} at ${selectedEvent.start}`)}
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="flex justify-center h-screen w-11/12 text-dark-pink text-xs p-3"
        eventPropGetter={eventPropGetter}
        onSelectEvent={(e) => handleSelectedEvent(e)}
      />
    </div>
  );
};

export default CalendarComponent;
