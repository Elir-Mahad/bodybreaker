import React from "react";
import "./DayWorkout.css";

const DayWorkout = ({ day, exercises }) => {
  //
  return (
    <div className="day-workout-container">
      <h2 className="day-heading">{day}</h2>
      {exercises.map((exercise, index) => (
        <div className="exercise-container" key={index}>
          <h3 className="exercise-name">{exercise.name}</h3>
          <div className="exercise-details">
            <img
              className="exercise-image"
              src={exercise.photo} // Example image source
              alt={exercise.name}
            />
            <div className="info-container">
              {exercise.muscle_groups && (
                <p>
                  <strong>Muscle Groups:</strong>{" "}
                  {exercise.muscle_groups.join(", ")}
                </p>
              )}

              <p>
                <strong>Equipment:</strong> {exercise.equipment}
              </p>
              <p>
                <strong>Exercise Type:</strong> {exercise.exercise_type}
              </p>
            </div>
          </div>
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
