// 042 - Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa


// function openOrSenior(data){
//   let result = [];
//   data.forEach((e) => result.push((e[0]>=55 && e[1]>7) ? 'Senior' : 'Open'));
//   return result;
// }


const openOrSenior = data => data.map(([age, handicap]) => (age>=55 && handicap>7) ? 'Senior' : 'Open');


console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))