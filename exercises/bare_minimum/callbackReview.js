/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, (err, results) => {
    if (err) {
      callback(err);
    } else {
      var allLine = String(results).split('\n');
      var firstLine = allLine[0];
      // console.log(firstLine);
      callback(err, firstLine);
    }
  });
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, results) => {
    if (err) {
      callback(new Error('Invalid URI'));
    } else {
      // console.log(results)
      callback(err, results.statusCode);
    }
  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
