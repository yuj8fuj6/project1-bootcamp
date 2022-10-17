import React, { useState, useEffect } from "react";
import { Clock, DummyCalendar, NavBar } from "../components ";
import { Calendar } from "../components ";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";

const Home = () => {
  const [profileData, setProfileData] = useState([]);
  const [medicineData, setMedicineData] = useState([]);
  const [moodData, setMoodData] = useState([]);

  const dataSync = async () => {
    const response = await JSON.parse(localStorage.getItem("profileLog"));
    setProfileData(response);
    // console.log(response);
  };

  useEffect(() => {
    dataSync();
  }, []);

  const [name, setName] = useState("");

  const index = profileData.length - 1;

  useEffect(() => {
    if (profileData.length !== 0) {
      setName(profileData[index].name);
    }
  }, [profileData, index]);

  const medDataSync = async () => {
    const response = await JSON.parse(localStorage.getItem("medicineLog"));
    setMedicineData(response);
    //  console.log(response);
  };

  useEffect(() => {
    medDataSync();
  }, []);

  const moodDataSync = async () => {
    const response = await JSON.parse(localStorage.getItem("moodLog"));
    setMoodData(response);
    //  console.log(response);
  };

  useEffect(() => {
    moodDataSync();
  }, []);

  // console.log(medicineData);

  return (
    <div className="base-container-secondary">
      <div className="flex justify-start mt-10 w-screen pl-10">
        <Clock />
      </div>
      <p className="font-light w-screen mt-2 text-xl text-dark-pink text-left pl-10">
        Welcome
      </p>
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        {name}
      </p>
      <NavBar />
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Calendar
      </p>
      <p className="font-light w-screen mt-2 mb-2 text-sm text-dark-pink text-left pl-10 pr-10">
        Please input your medicine dose and mood first to update this calendar.
      </p>
      <div className="h-max w-11/12 bg-white rounded-xl drop-shadow-xl">
        {medicineData && moodData ? (
          <Calendar medicineData={medicineData} moodData={moodData} />
        ) : (
          <DummyCalendar />
        )}
      </div>
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Graph
      </p>
      <p className="font-light w-screen mt-2 mb-2 text-sm text-dark-pink text-left pl-10 pr-10">
        This graph will show the changes in your mood, with respect to your medicine dose.
      </p>
      <div className="h-60 w-11/12 mb-10 bg-white rounded-xl drop-shadow-xl"></div>
    </div>
  );
};

export default Home;
