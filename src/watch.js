const sass = require("sass");
const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");

const SCSS_PATH = path.join(__dirname, "./resource/scss/");
const CSS_PATH = path.join(__dirname, "./resource/public/css/");

const compileSass = (filePath) => {
  const outFile = path.join(CSS_PATH, "app.css");
  console.log(filePath, outFile);
  sass.render(
    {
      file: filePath,
      outFile: outFile,
    },
    function (error, result) {
      if (!error) {
        fs.writeFile(outFile, result.css, function (err) {
          if (!err) {
            console.log(`SCSS compiled to CSS successfully: ${outFile}`);
          }
        });
      } else {
        console.log(error);
      }
    }
  );
};

chokidar.watch(SCSS_PATH).on("change", (filePath) => {
  console.log(`File ${filePath} has been changed, compiling...`);
  compileSass(filePath);
});

// Initial compilation for all SCSS files
fs.readdirSync(SCSS_PATH).forEach((file) => {
  if (path.extname(file) === ".scss") {
    compileSass(path.join(SCSS_PATH, file));
  }
});
