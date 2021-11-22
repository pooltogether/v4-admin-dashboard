const fs = require('fs');
const { ModuleResolutionKind } = require('typescript');

async function readDir(path) {
  try {
    return await fs.promises.readdir(path, (err, files) => {
      if (err) throw err;
      return files;
    });
  } catch (error) {
    console.log(error);
  }
}

async function writeJSON(path, object) {
  try {
    return await fs.promises.writeFile(path, JSON.stringify(object));
  } catch (error) {
    console.log(error);
  }
}

async function readJSON(path) {
  try {
    return await fs.promises.readFile(path, 'utf8', (err, file) => {
      if (err) throw err;
      return JSON.parse(file);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  readDir,
  readJSON,
  writeJSON
};
