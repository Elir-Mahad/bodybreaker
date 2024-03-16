import React from "react";
import "./DayWorkout.css";

const DayWorkout = ({ day, exercises }) => {
  //
  return (
    <div className="day-workout-container">
      <h2>{day}</h2>
      {exercises.map((exercise, index) => (
        <div className="exercise-container" key={index}>
          <h3>{exercise.name}</h3>
          <img
            className="exercise-image"
            src={exercise.photo} // Example image source
            alt={exercise.name}
          />
          <ul className="instruction-list">
            {exercise.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DayWorkout;
