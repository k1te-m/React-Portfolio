// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

// Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === "production") {
  // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
  app.use(express.static("client/build"));
}

// API and View Routes
app.use(routes);

// Mongo DB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Start the server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});
