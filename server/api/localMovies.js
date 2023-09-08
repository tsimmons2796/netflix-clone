const express = require("express");
const axios = require("axios");
const getFolderNames = require("../utils/movieUtils");

const router = express.Router();

router.get("/local-movies", (req, res) => {
  const dirPath = process.env.MOVIES_DIRECTORY;
  const folders = getFolderNames(dirPath);
  //   console.log(folders);
  res.status(200).json(folders);
});

module.exports = router;
