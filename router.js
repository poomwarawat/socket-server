const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

router.get("/get-chatroom", (req, res) => {
  console.log("Hello");
});

module.exports = router;
