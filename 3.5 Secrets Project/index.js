//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();

const port = 3000;
var flag = false;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function passCheck(req, res, next) {
    const pass = req.body["password"];
    if (pass === "letmesee") {
        flag = true;
    }
    next();
}

app.use(passCheck);

app.post("/check", (req, res) => {
    console.log(req.body);
    if (flag) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {

        res.sendFile(__dirname + "/public/index.html");

    }
    // console.log(req.body["password"])
})




app.listen(port, (req, res) => {
    console.log(`port is running at ${port}`)
})