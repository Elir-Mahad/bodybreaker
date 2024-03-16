import React, { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import DayWorkout from "./components/DayWorkout/DayWorkout";
import workoutsData from "./data/workoutsData";
import "./App.css"; // Import CSS file for styles

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null); // State to keep track of the selected day

  const handleDaySelect = (index) => {
    setSelectedDay(selectedDay === index ? null : index); // Toggle the selected day
  };

  return (
    <div className="app-container">
      <LandingPage selectedDay={selectedDay} onDaySelect={handleDaySelect} />
      {selectedDay !== null && (
        <DayWorkout
          day={workoutsData[selectedDay].day}
          exercises={workoutsData[selectedDay].exercises}
        />
      )}
    </div>
  );
};

export default App;
