import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("index.ejs");
    console.log();
})

app.post("/submit", (req, res) => {
    let name = req.body["username"];
    console.log(name)
    res.render("home.ejs", {
        username: name
    })
})

app.post("/home", (req, res) => {
    res.render("index.ejs");
})
app.listen(port, (req, res) => {
    console.log(`server is active on ${port}`);
})