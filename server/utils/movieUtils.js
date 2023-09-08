const fs = require("fs");
const path = require("path");

const extractTitleWithoutYear = (inputString) => {
  const yearMatch = inputString.match(/\((\d{4})\)/);
  let title;
  let year = 0;

  if (yearMatch) {
    year = parseInt(yearMatch[1]);
    title = inputString.replace(`(${year})`, "").trim();
  } else {
    title = inputString;
  }

  // Remove "Episode" followed by Roman numerals
  if (title.toLowerCase().includes("star wars")) {
    title = title.replace(/\bEpisode\s+([IVXLCDM]+)\b/i, "").trim();
  }

  return { title, year };
};

const getFolderNames = (dirPath) => {
  let movieList = [];
  let unmatchedDirectories = [];

  try {
    // Read the directory
    const items = fs.readdirSync(dirPath);

    // Separate directories and video files
    const directories = items.filter((item) =>
      fs.statSync(path.join(dirPath, item)).isDirectory()
    );

    const videoFiles = items.filter((item) => {
      const extname = path.extname(item).toLowerCase();
      return [".mp4", ".avi", ".mkv", ".mov", ".wmv"].includes(extname);
    });

    // Process directories
    directories.forEach((directory) => {
      const { title, year } = extractTitleWithoutYear(directory);

      if (year === 0 || !title) {
        unmatchedDirectories.push(directory);

        // Recursively navigate into the directory and attempt to extract movie titles and years
        const nestedMovieList = getFolderNames(path.join(dirPath, directory));
        movieList = movieList.concat(nestedMovieList);
      } else {
        movieList.push({ title, year });
      }
    });

    // Process video files
    videoFiles.forEach((file) => {
      const { title, year } = extractTitleWithoutYear(file);
      if (year !== 0 && title) {
        movieList.push({ title, year });
      } else {
        // console.log(`Unmatched video file: ${file}`);
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return movieList;
};

module.exports = getFolderNames;
