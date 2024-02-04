// 029 - Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  // return this.split(' ').map(e => e.replace(e[0], e[0].toUpperCase())).join(' ');
  return this.split(' ').map(e => e.charAt().toUpperCase() + e.substring(1).toLowerCase()).join(' ');
};


console.log('teS ini ke 1'.toJadenCase())