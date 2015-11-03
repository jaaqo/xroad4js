var xroad4js = require('../index.js'),
  Request = xroad4js.Request,
  fromXR = xroad4js.fromXR,
  toXR = xroad4js.toXR;

var request = new Request();
var request2 = new Request({ client: {}, service: {} }, {content: 'asdf'});
var request3 = new Request({
  header: {
    client: {},
    service: {}
  },
  body: {
    content: 'Using a constructor' 
  }
});

var request4 = {
  header: {
    client: {},
    service: {}
  },
  body: {
    content: 'Not using a constructor' 
  }
};

request.setBody({content: 'SOAP'});
request2.setService({serviceCode: 'getRandom'});
request3.setClient({memberClass: 'COM'});

console.log(toXR(request) + '\n');
console.log(toXR(request2) + '\n');
console.log(toXR(request3) + '\n');
console.log(toXR(request4));
