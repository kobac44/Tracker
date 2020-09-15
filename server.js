const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Fitness-Activity",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// routes
app.use(require("./Develop/public/api.js"));

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
