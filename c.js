var A = require('./a');

function C(){}
C.prototype = new A();

module.exports = C;
