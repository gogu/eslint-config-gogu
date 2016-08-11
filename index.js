var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

var filePath = path.resolve(__dirname, './defaults.yml');
var config = {};
try {
  config = yaml.safeLoad(fs.readFileSync(filePath, "utf8")) || {};
} catch(e) {
  console.error("Error reading YAML file: " + filePath);
  e.message = "Cannot read config file: " + filePath + "\nError: " + e.message;
  throw e;
}

module.exports = config;
