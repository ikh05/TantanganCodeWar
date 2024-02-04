// 017 - Calculating with Functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// function zero(number = false) {
// 	return (number) ? Math.floor(eval(0 + number)) : 0;
// }
// function one(number = false) {
// 	return (number) ? Math.floor(eval(1 + number)) : 1;
// }
// function two(number = false) {
// 	return (number) ? Math.floor(eval(2 + number)) : 2;
// }
// function three(number = false) {
// 	return (number) ? Math.floor(eval(3 + number)) : 3;
// }
// function four(number = false) {
// 	return (number) ? Math.floor(eval(4 + number)) : 4;
// }
// function five(number = false) {
// 	return (number) ? Math.floor(eval(5 + number)) : 5;
// }
// function six(number = false) {
// 	return (number) ? Math.floor(eval(6 + number)) : 6;
// }
// function seven(number = false) {
// 	return (number) ? Math.floor(eval(7 + number)) : 7;
// }
// function eight(number = false) {
// 	return (number) ? Math.floor(eval(8 + number)) : 8;
// }
// function nine(number = false) {
// 	return (number) ? Math.floor(eval(9 + number)) : 9;
// }

// function plus(number){
// 	return " + " + number
// }
// function minus(number) {
// 	return " - " + number

// }
// function times(number) {
// 	return " * " + number

// }
// function dividedBy(number) {
// 	return " / " + number

// }

const zero  = (func) => func ? func(0) : 0;
const one   = (func) => func ? func(1) : 1;
const two   = (func) => func ? func(2) : 2;
const three = (func) => func ? func(3) : 3;
const four  = (func) => func ? func(4) : 4;
const five  = (func) => func ? func(5) : 5;
const six   = (func) => func ? func(6) : 6;
const seven = (func) => func ? func(7) : 7;
const eight = (func) => func ? func(8) : 8;
const nine  = (func) => func ? func(9) : 9;

const plus      = (x) => (num) => num + x;
const minus     = (x) => (num) => num - x;
const times     = (x) => (num) => num * x;
const dividedBy = (x) => (num) => ~~(num / x);





console.log(two(times(six())));




