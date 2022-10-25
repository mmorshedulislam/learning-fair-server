const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("The Server is Upcoming...");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c.id == id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("The Server is Running on Port: ", port);
});
