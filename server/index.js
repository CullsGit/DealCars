const express = require("express");
const app = express();

const carsData = require("./data/cars");

app.get("/api/cars", (req, res) => {
  res.json({ cars: carsData });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
