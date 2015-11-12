/*eslint no-console: 0*/

var xroad4js = require('../index.js'),
  toXR = xroad4js.toXR,
  fromXR = xroad4js.fromXR,
  fs = require('fs'),
  util = require('util');

var file = fs.readFileSync('./test/xml/getRandomRequest.xml', 'utf8');

toXR({envelope: {}}, function (err, res) {
  console.log(util.inspect(res, false, null));
});

fromXR(file, function (err, res) {
  console.log(res);
});
