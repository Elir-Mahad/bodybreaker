const workouts = [
  {
    day: "Warm up",
    exercises: [
      {
        name: "Jumping Jacks",
        photo:
          "https://www.researchgate.net/profile/Mohammed-Abou-Elmagd/publication/341734848/figure/fig1/AS:896516470362114@1590757591713/Sample-of-Jumping-Jacks-Exercise-4.png",
        instructions: [
          "Stand upright with your feet together and your arms at your sides.",
          "Jump up, spreading your legs out wide and raising your arms above your head.",
          "Jump again, returning to the starting position.",
          "Repeat for the desired number of reps.",
          "Keep a brisk pace to get your heart rate up.",
        ],
        duration: "1 minute",
      },
      {
        name: "Arm Circles",
        photo:
          "https://iris.hattiesburgclinic.com/patadv/exkit/Dynamic%20Exercises/Images/0430000010wu006m.png",
        instructions: [
          "Stand with your feet shoulder-width apart and extend your arms straight out to the sides.",
          "Make small circles with your arms, gradually increasing the size of the circles.",
          "After a set number of reps, switch directions and make circles in the opposite direction.",
        ],
        duration: "30 seconds",
      },
      {
        name: "High Knees",
        photo:
          "https://www.endomondo.com/wp-content/uploads/2023/12/Sprinting.jpg",
        instructions: [
          "Stand in place with your feet hip-width apart.",
          "Run in place, bringing your knees up towards your chest as high as you can.",
          "Pump your arms to increase intensity.",
          "Maintain a brisk pace for the desired duration.",
        ],
        duration: "1 minute",
      },
      {
        name: "Butt Kicks",
        photo:
          "https://hips.hearstapps.com/hmg-prod/images/mh40-buttkicks-1660661031.jpg",
        instructions: [
          "Stand in place with your feet hip-width apart.",
          "Run in place, bringing your heels up towards your buttocks.",
          "Keep your knees pointing towards the ground and maintain a brisk pace.",
          "Continue for the desired duration.",
        ],
        duration: "1 minute",
      },
      {
        name: "Bodyweight Squats",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2018/07/Bodyweight-squat-resized.png",
        instructions: [
          "Stand with your feet shoulder-width apart.",
          "Lower your body by bending your knees and pushing your hips back, as if you were sitting back into a chair.",
          "Keep your chest up and your back straight.",
          "Lower down until your thighs are parallel to the ground, then push through your heels to return to the starting position.",
          "Repeat for the desired number of reps.",
        ],
        duration: "1 minute",
      },
    ],
  },
  {
    day: "Day 1: Upper Body Strength (Chest and Triceps Focus)",
    exercises: [
      {
        name: "Bench press",

        photo:
          "https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg",
        instructions: ["4 sets x 6-8 reps"],
      },
      {
        name: "Incline dumbbell press",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2016/11/incline-dumbbell-bench-press-resized.png",
        instructions: ["4 sets x 8-10 reps"],
      },
      {
        name: "Chest dips",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2017/08/assisted-triceps-dip-resized-1.png",
        instructions: ["3 sets x max reps"],
      },
      {
        name: "Skull crushers",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2018/06/decline-ez-bar-skull-crusher-resized.png",
        instructions: ["3 sets x 8-10 reps"],
      },
      {
        name: "Cable flyes",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2016/05/cable-cross-over-resized.png",
        instructions: ["3 sets x 10-12 reps"],
      },
      {
        name: "Tricep pushdowns",
        photo:
          "https://kinxlearning.com/cdn/shop/files/exercise-45_1000x.jpg?v=1613157966",
        instructions: ["3 sets x 10-12 reps"],
      },
    ],
  },
  {
    day: "Day 2: Lower Body Strength",
    exercises: [
      {
        name: "Squats",
        photo:
          "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/dumbbell-squat-resized-FIXED.png",
        instructions: ["4 sets x 6-8 reps"],
      },
      {
        name: "Front Dumbbell Raises",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2016/10/Dumbbell-Standing-Alternate-Front-Raise-resized.png",
        instructions: ["3 sets x 6-8 reps"],
      },
      {
        name: "Bulgarian split squats",
        photo:
          "https://weighttraining.guide/wp-content/uploads/2017/02/Barbell-Bulgarian-Split-Squat-resized-fixed.png",
        instructions: ["3 sets x 8-10 reps per leg"],
      },
      {
        name: "Barbell Shoulder press",
        photo:
          "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/barbell-military-press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4",
        instructions: ["3 sets x 6-8 reps"],
      },
      {
        name: "Leg press",
        photo:
          "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Sled-45-degree-Leg-Press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4",
        instructions: ["4 sets x 8-10 reps"],
      },
      {
        name: "Calf raises",
        photo:
          "https://fitnessvolt.com/wp-content/uploads/2021/02/dumbbell-standing-calf-raise-.jpg",
        instructions: ["4 sets x 10-12 reps"],
      },
    ],
  },
  {
    day: "Day 3: Active Recovery or Rest",
    exercises: [
      {
        name: "Optional",
        photo: "",
        instructions: [
          "Light cardio, yoga, or foam rolling to aid in recovery",
        ],
      },
    ],
  },
  {
    day: "Day 4: Push Day (Upper Body - Shoulders and Triceps Focus)",
    exercises: [
      {
        name: "Military press",
        photo: "",
        instructions: ["4 sets x 6-8 reps"],
      },
      {
        name: "Lateral raises",
        photo: "",
        instructions: ["4 sets x 8-10 reps"],
      },
      {
        name: "Arnold press",
        photo: "",
        instructions: ["3 sets x 8-10 reps"],
      },
      {
        name: "Tricep overhead dumbbell extension",
        photo: "",
        instructions: ["3 sets x 8-10 reps"],
      },
      {
        name: "Tricep kickbacks",
        photo: "",
        instructions: ["3 sets x 10-12 reps"],
      },
    ],
  },
  {
    day: "Day 5: Pull Day (Upper Body - Back and Biceps Focus)",
    exercises: [
      {
        name: "Pull-ups",
        photo: "",
        instructions: ["4 sets x 6-8 reps"],
      },
      {
        name: "Barbell rows",
        photo: "",
        instructions: ["4 sets x 6-8 reps"],
      },
      {
        name: "Seated cable rows",
        photo: "",
        instructions: ["3 sets x 8-10 reps"],
      },
      {
        name: "Barbell bicep curls",
        photo: "",
        instructions: ["3 sets x 8-10 reps"],
      },
      {
        name: "Hammer curls",
        photo: "",
        instructions: ["3 sets x 8-10 reps"],
      },
      {
        name: "Reverse curls",
        photo: "",
        instructions: ["3 sets x 8-10 reps"],
      },
    ],
  },
  {
    day: "Day 6: Full Body Circuit Training",
    exercises: [
      {
        name: "Circuit",
        photo: "",
        instructions: [
          "Bodyweight squats (20 reps)",
          "Push-ups (15 reps)",
          "Walking lunges (10 reps per leg)",
          "Plank (hold for 60 seconds)",
          "Bicycle crunches (20 reps per side)",
          "Jumping jacks (30 seconds)",
        ],
      },
      {
        name: "Cool-down",
        photo: "",
        instructions: ["Stretching for all major muscle groups"],
      },
    ],
  },
];

export default workouts;
