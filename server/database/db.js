require("dotenv").config();

const mongoose = require("mongoose");
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/movie-db";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected successfully to MongoDB server");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process with failure
  }
};

const moviesCollection = async () => {
  try {
    await mongoose.connection.collection("movies");
  } catch (error) {
    console.error("Error connecting to movies MongoDB collection", error);
  }
};

module.exports = { connectDB, moviesCollection };
