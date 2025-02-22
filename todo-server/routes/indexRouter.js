const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  // const crypto = require("crypto");

  // const secret = crypto.randomBytes(64).toString("hex");
  // console.log(secret);
  res.sendFile(path.join(__dirname, "..", "public", "views", "index.html"));
});

module.exports = router;