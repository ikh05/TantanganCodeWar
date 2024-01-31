// 010 - Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f



const squareSum = (numbers) => numbers.reduce((sum, el) => sum + el*el, 0);



console.log(squareSum([1,2,4,5,6,7,8,9,10,11,12,13,14,15]));