import express from "express";

const app = express();
const port = 3000;
function logger(req, res, next) {
  console.log("Request method:", req.method);
  console.log("reques url:", req.url);
  next();
}


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.put("/connect", (req, res) => {
  res.send("this is from put which is request /connect");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
