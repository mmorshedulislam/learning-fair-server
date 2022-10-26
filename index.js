const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

const courses = require("./data/courses.json");
const blogs = require("./data/blog.json");
const faq = require("./data/faq.json");

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

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  if (id == "8") {
    res.send("Sorry, Didn't find blog you want.");
  } else {
    const selectedBlog = blogs.find((b) => b.id == id);
    res.send(selectedBlog);
  }
});

app.get("/faq", (req, res) => {
  res.send(faq);
});

app.listen(port, () => {
  console.log("The Server is Running on Port: ", port);
});
