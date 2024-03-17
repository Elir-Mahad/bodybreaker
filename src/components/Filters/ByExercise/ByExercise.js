import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import DayWorkout from "./components/DayWorkout/DayWorkout";
import { upperBodyData } from "./data/upperBodyWorkouts";
import "./App.css"; // Import CSS file for styles

const ByExercise = () => {
  const exercises = upperBodyData;
  //
  //!Filter based on exercise

  const [selectedExerciseName, setSelectedExerciseName] = useState(null);

  const handleExerciseSelect = (exerciseName) => {
    setSelectedExerciseName(
      selectedExerciseName === exerciseName ? null : exerciseName
    );
  };
  const filteredExercises = selectedExerciseName
    ? exercises.filter((exercise) => exercise.name === selectedExerciseName)
    : exercises;

  return (
    <div className="app-container">
      <Menu exercises={exercises} onExerciseSelect={handleExerciseSelect} />
      {selectedExerciseName !== null && (
        <DayWorkout exercises={filteredExercises} />
      )}
    </div>
  );
};

export default ByExercise;
