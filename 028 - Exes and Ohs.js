// 028 - Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a


// const XO = str => str.split('x').length === str.split('o').length;

const XO = (str) => str.replace(/[^X]/gi, '').length === str.replace(/[^O]/gi, '').length;

console.log(XO('xo'))