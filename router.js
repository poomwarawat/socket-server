const express = require("express");
const router = express.Router();

const doctors = [
  { uuid: 1, name: "test" },
  { uuid: 2, name: "kaiky" },
  { uuid: 3, name: "mephoo" },
  { uuid: 4, name: "poomwarawat" },
];

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

router.get("/get-doctors", (req, res) => {
  res.send(doctors);
});

module.exports = router;
