// 002 - Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// function makeNegative(num) {
//   if(num > 0) {
//   	return -1*num;
//   }else{
//   	return num;
//   }
// }

// function makeNegative (num) {
// 	return num > 0 ? -num : num;
// }

// const makeNegative = num => num > 0 ? num : -num;

const makeNegative = num => -Math.abs(num);
