const express = require("express");
const app = express();
const { connectTOMongo } = require("./connect.js");
const { urlRouter } = require("./routes/url.js");
const port = 3000;
connectTOMongo("mongodb://localhost:27017/url").then(() => {
  console.log("mogoDb connected successfully")
  }).catch((err, result) => {
    console.log("error occured " + err);;
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRouter);
app.listen(port, () => {
  console.log("server started at " + port);
});
