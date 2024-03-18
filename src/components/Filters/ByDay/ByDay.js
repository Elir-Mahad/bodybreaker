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

  // function extractExerciseNames(exercises) {
  //   return exercises.map((exercise) => exercise.name);
  // }
  // const exerciseNames = extractExerciseNames(exercises);
  // console.log(exerciseNames);
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

// [
//   "Bench Press",
//   "Incline dumbell press",
//   "Skull Crushers",
//   "Cable flyes",
//   "Tricep pushdowns",
//   "Tricep Dips",
//   "Pull-Up",
//   "Barbell Row",
//   "Dumbbell Shoulder Press",
//   "Dumbbell Bicep Curl",
//   "Tricep kickbacks",
//   "Dumbbell Flyes",
//   "Military Press",
//   "Lat Pulldown",
//   "Chest Press Machine",
//   "Hammer Curls",
//   "Seated Row Machine",
//   "Arnold Press",
//   "Lateral Raises",
//   "Front Dumbbell Raises",
//   "Pushdowns",
//   "Reverse Flyes",
//   "Reverse curls",
//   "Barbell Shoulder press",
//   "Push Press",
//   "Tricep overhead dumbbell extension",
//   "Preacher Curls",
//   "Upright Rows",
//   "Cable Rows",
//   "Face Pulls",
//   "Hammer Strength Bench Press",
//   "Spider Curls",
//   "Dumbbell Pullover",
//   "Cable Crossover",
//   "Close-Grip Bench Press",
//   "Dumbbell Shrugs",
//   "Squats",
//   "Lunges",
//   "Deadlifts",
//   "Romanian Deadlifts",
//   "Bulgarian Split Squats",
//   "Leg Press",
//   "Step-Ups",
//   "Calf Raises",
//   "Hip Thrusts",
//   "Leg Curls",
//   "Barbell Hip Thrusts",
//   "Hack Squats",
//   "Sumo Deadlifts",
//   "Dumbbell Lunges",
//   "Dumbbell Step-Ups",
//   "Seated Leg Press",
//   "Walking Lunges",
//   "Single-Leg Romanian Deadlifts",
//   "Barbell Reverse Lunges",
//   "Good Mornings",
//   "Smith Machine Squats",
//   "Leg Extensions",
//   "Glute Bridges",
//   "Cable Pull-Throughs",
//   "Box Jumps",
//   "Reverse Hyperextensions",
//   "Barbell Box Squats",
//   "Single-Leg Press",
//   "Cossack Squats",
//   "Dumbbell Deadlifts",
//   "Reverse Lunges",
//   "Seated Calf Raises",
//   "Stiff-Legged Deadlifts",
// ];
