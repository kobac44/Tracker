const express = require("express");
const mongoose = require("mongoose");
const { db } = require("../models/Workout");
const router = require("express").Router();
const Workout = require("../models/Workout");

// api routes(always a difficult task)
router.get("/api/workouts", (req, res) => {
  console.log("workouts");
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// Creating Workouts
router.post("/api/workouts", async (req, res) => {
  try {
    const response = await db.Workout.create({ type: "workout" });
    res.json(response);
  } catch (err) {
    console.log("error creating workout:", err);
  }
});

router.put("/api/workouts/:id");
module.exports = router;
