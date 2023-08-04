import express from "express";

const app = express();
const port = 3000;


app.listen(port, (req, res) => {
    console.log(`port is running at ${port}`)
})

var date = new Date();
var day = date.getDay();
// console.log(day);

app.get("/", (req, res) => {
    if (day == 0 || day == 6) {

        res.render("index.ejs", {
            dayType: "a weekend",
            advice: " it's time to have some fun"
        })
    } else {
        res.render("index.ejs", {
            dayType: "a weekday",
            advice: " work hard to enjoy weekend"
        })
    }
})

