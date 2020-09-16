const router = require("express").Router();
const Workout = require("../model/Workourt.js");
const { db } = require("../models/workout.js");

// api routes(always a difficult task)
router.post("/api/workouts", async (req, res) => {
  db.Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
