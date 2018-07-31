// Inject node globals into React Native global scope.
global.Buffer = require('buffer').Buffer;
global.process = require('process');
global.process.browser = false;

if (typeof btoa === 'undefined') {
    global.btoa = function(str) {
        return new Buffer(str, 'binary').toString('base64');
    };
}

if (typeof atob === 'undefined') {
    global.atob = function(b64Encoded) {
        return new Buffer(b64Encoded, 'base64').toString('binary');
    };
}
