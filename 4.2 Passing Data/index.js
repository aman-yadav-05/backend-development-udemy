import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var start = "<h1>enter your name below</h1>";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("<h1>Enter your name below:")
  res.render("index.ejs", {
    insert: start
  })
});

app.post("/submit", (req, res) => {
  const fullName = req.body["fName"] + req.body["lName"];
  const length = fullName.length;
  let statement = `<h1>Your name contain ${length} letters</h1>`;
  res.render("index.ejs", {
    insert: statement
  })
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
