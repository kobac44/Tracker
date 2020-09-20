const router = require("express").Router();
const Workout = require("../models/Workout");

// Using 17-NoSQL activity #7 these routes
router.get("/api/workouts", (req, result) => {
  Workout.find()
    .then((data) => {
      result.json(data);
    })
    .catch((err) => {
      result.json(err);
    });
});

router.get("api/workouts/range", (req, result) => {
  Workout.find()
    .then((dbWorkout) => {
      result.json(dbWorkout);
    })
    .catch((err) => {
      result.status.json(err);
    });
});

router.post("/api/workouts", ({ body }, result) => {
  Workout.create(body)
    .then((dbWorkout) => {
      result.json(dbWorkout);
    })
    .catch((err) => {
      result.json(err);
    });
});

// // Helpful!! Ins-populate class 17 NoSQL activity #14
// router.put("/api/workout/ :id", (req, result) => {
//   Workout.findByIdAndUpdate(
//     { id: req.parms.id },
//     { $push: { exercise: req.body } }
//   )
//     .then((dbExercise) => {
//       result.json(dbExercise);
//     })
//     .catch((err) => {
//       result.status(400).json(err);
//     });
// });

module.exports = router;
