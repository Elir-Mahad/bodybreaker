import React from "react";
import "./Menu.css";
const Menu = ({
  //
  onDaySelect,
  // onExerciseSelect,
  exercises,
}) => {
  const uniqueDays = [...new Set(exercises.map((exercise) => exercise.day))];
  console.log(uniqueDays);
  //

  return (
    <div className="landing-page">
      <h1 className="app-header">Body Breaker</h1>
      <div className="days-container">
        {/* {exercises.map((exercise, index) => (
          <button key={index} onClick={() => onExerciseSelect(exercise.name)}>
            {exercise.name}
          </button>
        ))} */}
        {/*  */}
        {uniqueDays.map((item, index) => (
          <>
            {item && (
              <button
                className="day-button"
                key={index}
                onClick={() => onDaySelect(item)}
              >
                {item}
              </button>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Menu;
