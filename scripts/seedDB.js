const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/portfolio"
);

const repoSeed = [

    {
        name: "EcommerceApp",
        github: "oroth8",
        imageURL: "./images/limit.png",
    },
    {
        name: "Employee-Directory",
        github: "k1te-m",
        imageURL: "./images/employee_direct.PNG"
    },
    {
        name: "Project-1-Restaurant-Roulette",
        github: "k1te-m",
        imageURL: "./images/rr-1.PNG",
    },
    {
        name: "Budget-Tracker",
        github: "k1te-m",
        imageURL: "./images/budget-tracker.PNG"
    },
    {
        name: "Employee-Tracker",
        github: "k1te-m",
        imageURL: "./images/EMS.PNG",
    },
    {
        name: "Fitness-Tracker",
        github: "k1te-m",
        imageURL: "./images/fitness_tracker.PNG"
    },
    {
        name: "courseWork_06_weatherDashboard",
        github: "k1te-m",
        imageURL: "./images/weatherdemo.PNG",
    },
    {
        name: "courseWork_05_dayPlanner",
        github: "k1te-m",
        imageURL: "./images/planner.PNG",
    },
    {
        name: "Team-Profile-Generator",
        github: "k1te-m",
        imageURL: "./images/teamgenerator.PNG",
    },
    {
        name: "Note-Taker",
        github: "k1te-m",
        imageURL: "./images/notetaker.PNG",
    },
    {
        name: "Burger-Logger",
        github: "k1te-m",
        imageURL: "./images/burger-logger.png",
    },
]

db.Repo.remove({})
  .then(() => db.Repo.collection.insertMany(repoSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });