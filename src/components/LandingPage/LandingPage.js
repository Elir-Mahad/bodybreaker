import React from "react";
import "./LandingPage.css";
import workoutsData from "../../data/workoutsData";

const LandingPage = ({ selectedDay, onDaySelect }) => {
  return (
    <div className="landing-page">
      <h1 className="app-header">Body Breaker</h1>
      <div className="days-container">
        {workoutsData.map((workout, index) => (
          <button
            key={index}
            className={`day-button ${selectedDay === index ? "active" : ""}`}
            onClick={() => onDaySelect(selectedDay === index ? null : index)}
          >
            {workout.day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
