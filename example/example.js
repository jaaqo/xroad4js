/*eslint no-console: 0*/

var xroad4js = require('../index.js'),
  toXR = xroad4js.toXR,
  fromXR = xroad4js.fromXR,
  XRMsg = xroad4js.XRMsg,
  fs = require('fs');

var file = fs.readFileSync('./test/xml/getRandomRequest.xml', 'utf8');

var msg = XRMsg().prepare();

var wrongMsg = {foo: 'bar'};

toXR(msg, function (err, res) {
  console.log('ToXR:');
  console.log(res);
});

toXR(wrongMsg, function (err, res) {
  console.log('ToXR:');
  console.log(res);
});

fromXR(file, function (err, res) {
  console.log('FromXR:');
  console.log(res);
});
