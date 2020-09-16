const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  Days: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Please enter a workout.",
      },
      name: {
        type: String,
        required: "Please enter the name of the exercise.",
      },
      duraction: {
        type: Number,
        required: "Please enter how long the workout lasted.",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User mod
module.exports = Workout;
