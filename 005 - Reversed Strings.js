// function solution(str){
//   let resalt = '';
//   for(let i = str.length; i>0; i--){
//   	resalt += str[i-1];
//   }
//   return resalt;
// }


// function solution (str) {
// 	return str.split('').reverse().join('');
// }

/*subString dan rekusif*/
// function solution (str){ 
// 	return str.length > 0 ? solution(str.substring(1)) + str[0] : '';
// }

// const solution = (str) => str.split('').reduce((t,e) => e+t);

const solution = str => str.split('').reverse().join('');

console.log(solution('abc'));