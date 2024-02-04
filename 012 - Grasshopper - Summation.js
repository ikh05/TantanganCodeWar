// 012 - Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// const summation = function (num) {
//   let resalt = 0;
//   for(let i = 0; i<= num ; i++){
//   	resalt += i;
//   }
//   return resalt;
// }

const summation = (num) => Array(num).fill(1).map((e, i) => e+i).reduce((sum, el) => el + sum);


console.log(summation(8));
