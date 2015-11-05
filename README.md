# XRoad4JS
A utility library for handling X-Road SOAP requests and responses to and from JavaScript

## Status

This library is currently in a very early stage of development and thus under
constant changes. You should not rely on the functionality this library currently
provides.

## Usage

```javascript
var toXR = require('xroad4js').toXR;
var fromXR = require('xroad4js').fromXR;
```

## Testing
`npm test` to run mocha tests using mocha runner  
`gulp test` to run mocha tests using gulp

### Test runner
`gulp` default task runs lint (eslint) and mocha tests and watches directories
for changes (and reruns lint/tests).

## License
This project is licensed under the MIT license. Please see LICENSE.txt at the
root of the project.
