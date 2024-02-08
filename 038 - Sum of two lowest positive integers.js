// 038 - Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// function sumTwoSmallestNumbers(numbers) {  
//   let a = numbers.filter(e => e>0).sort((a,b) => a-b)[0];
//   let b = numbers.filter(e => e>0).sort((a,b) => a-b)[1];
//   return a + b;
// }

const sumTwoSmallestNumbers = numbers => numbers.filter(e => e>0).sort((a,b) => a-b).filter((_, i) => i<2).reduce((sum, e) => sum+e, 0);


console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))