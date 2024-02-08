// 035 - Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00


// function digitalRoot(n) {
// 	let result = n.toString().split('').reduce((sum, e) => sum + Number(e), 0);
// 	return (result > 9) ? digitalRoot(result) : result
// }

const digitalRoot = (n) => (n-1)%9+1;

console.log(digitalRoot(123456789))