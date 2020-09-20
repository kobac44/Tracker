const router = require("express").Router();
const Workout = require("../models/Workout");

// Using 17-NoSQL activity #7 these routes
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log("dbWorkout", err);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("api/workouts/range", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Helpful!! Ins-populate class 17 NoSQL activity #14
router.put("/api/workouts/ :id", (req, res) => {
  Workout.findByIdAndUpdate(
    { id: req.parms.id },
    { $push: { exercise: req.body } }
  )
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
