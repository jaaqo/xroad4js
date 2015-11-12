var xroad4js = require('../index.js'),
  fs = require('fs'),
  util = require('util'),
  fromXR = xroad4js.fromXR,
  toXR = xroad4js.toXR;

fromXR(fs.readFileSync('../test/xml/getRandomResponse.xml', 'utf8'), function (err, res) {
  console.log(util.inspect(res, false, null));
  console.log(toXR(res));
});
