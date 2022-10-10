import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Alert,
  Home,
  Log,
  Login,
  Medicine,
  Mood,
  Notification,
  Profile,
  Registration,
  Start,
} from "./pages";
import "./App.css";

function App() {
  const [state, setState] = useState()

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/log" element={<Log />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
