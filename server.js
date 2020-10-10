const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Port
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

console.log(process.env.MONGODB_URI);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://kobie:tree2211@cluster0.gutfb.mongodb.net/exercise?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// routes
// app.use(require("./Develop/public/api.js"));

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
