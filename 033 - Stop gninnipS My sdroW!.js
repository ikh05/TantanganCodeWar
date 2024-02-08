// 033 - Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
};
const spinWords = string => string.split(' ').map(e => (e.length < 5)?e : e.reverse()).join(' ');

console.log('saya'.reverse())

console.log(spinWords('saya makan nasi untuk sarapan besok'))
