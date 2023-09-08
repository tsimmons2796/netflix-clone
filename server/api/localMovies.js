const express = require("express");
const axios = require("axios");
const connectToDb = require("../utils/connectToDb");
const getFolderNames = require("../utils/movieUtils");

const router = express.Router();

router.get("/local-movies", (req, res) => {
  const dirPath = "H:\\Plex\\Movies";
  const folders = getFolderNames(dirPath);
  //   console.log(folders);
  res.status(200).json(folders);
});

module.exports = router;
