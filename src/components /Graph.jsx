import React, { useState, useEffect } from "react";
import moment from "moment";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  TimeScale,
} from "chart.js";

import uuid from "react-uuid";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  TimeScale,
);
const Graph = (props) => {
  const data = props.medicineData;
  const moodData = props.moodData;

  // console.log(moodData);

  moodData.sort(
    (a, b) =>
      moment(`${a.moodDate} ${a.moodTime}`).toDate().getTime() -
      moment(`${b.moodDate} ${b.moodTime}`).toDate().getTime(),
  );

  const moodEvent = moodData.map((data) => data.id);
  const moodTime = moodData.map((data) =>
    moment(`${data.moodDate} ${data.moodTime}`).format("YYYY-MM-DD hh:mm"),
  );

  const [medicineEvent, setMedicineEvent] = useState([]);
  const [medicineTime, setMedicineTime] = useState([]);
  const [medicineName, setMedicineName] = useState([]);

  let tempMedicineEvent = [];
  let tempMedicineTime = [];
  let tempMedicineName = [];

  useEffect(() => {
    data.forEach((element) => {
      tempMedicineName.push(element.medicineName);
      tempMedicineEvent.push(element.medicineQtyOne);
      tempMedicineTime.push(
        moment(`${element.medicineDate} ${element.medicineTime}`).toDate(),
      );
    });

    setMedicineName(tempMedicineName);
    setMedicineEvent(tempMedicineEvent);
    setMedicineTime(tempMedicineTime);
  }, [data, moodData]);

  // console.log(moodEvent, moodTime, medicineEvent, medicineTime, medicineName);

  console.log(moodTime);

  const dataGraph = {
    title: {
      text: "Date Time",
    },
    labels: moodTime,
    datasets: [
      {
        type: "line",
        label: "Mood Tracker",
        data: moodEvent,
        tension: 0,
        borderColor: "#EF7C8E",
        backgroundColor: "#EF7C8E",
        radius: 2,
        borderWidth: 2,
        pointHitRadius: 5,
      },
      {
        type: "bar",
        label: "Med Intake",
        data: moodEvent,
        barThickness: 4,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  const options = {
    animation: true,
    spanGaps: true,
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Mood Levels",
        },
      },
      x: {
        type: "time",
        time: {
          displayFormats: {
            second: "MMM DD",
            minute: "MMM DD",
            hour: "MMM DD",
            day: "MMM DD",
            week: "MMM DD",
            month: "MMM DD",
            quarter: "MMM DD",
            year: "MMM DD",
          },
        },
        title: {
          display: true,
          text: "Date-Time",
        },
      },
    },
  };
  return (
    <div>
      <Chart
        type="line"
        data={dataGraph}
        options={options}
        className="h-max w-11/12 text-dark-pink text-xs p-3"
      />
    </div>
  );
};

export default Graph;
