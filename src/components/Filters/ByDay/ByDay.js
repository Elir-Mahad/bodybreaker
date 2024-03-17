import React, { useState } from "react";
import Menu from "../../Menu/Menu";
import DayWorkout from "../../DayWorkout/DayWorkout";
import { upperBodyData } from "../../../data/upperBodyWorkouts";
import { lowerBodyData } from "../../../data/lowerBodyWorkouts";

const ByDay = () => {
  const exercises = [
    //
    ...upperBodyData,
    ...lowerBodyData,
  ];

  //! Filter based on day

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDaySelect = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const dayBasedExercises = selectedDay
    ? exercises.filter((exercise) => exercise.day === selectedDay)
    : exercises;

  console.log(selectedDay);
  return (
    <div className="app-container">
      <Menu onDaySelect={handleDaySelect} exercises={exercises} />

      {selectedDay !== null && <DayWorkout exercises={dayBasedExercises} />}
    </div>
  );
};

export default ByDay;
