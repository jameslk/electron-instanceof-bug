var A = require('./a');
var B = require('b_module/b');

var C = require('./c');
var D = require('./d');

var c = new C();
var d = new D();

console.log(c instanceof A, 'should be true because c has A in its prototype chain');
console.log(d instanceof B, 'should be true because d has B in its prototype chain');
