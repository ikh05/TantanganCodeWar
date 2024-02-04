// 018 - Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// const stringToNumber = (str) =>{
// 	let resalt = 0;
// 	for(let i = str.length-1; i >= 0; i--){
// 		if(str[i] == '-'){
// 			resalt *= -1;
// 		} else{
// 			resalt += 10 ** (str.length - i - 1) * str[i];
// 		}
// 	}
// 	return resalt;
// }

// const stringToNumber = (str) =>{
// 	let resalt = 0;
// 	for(let i = str.length-1; i >= 0; i--){
// 		resalt += (str[i] === '-') ? -2*resalt :  10 ** (str.length - i - 1) * str[i];
// 	}
// 	return resalt;
// }



// const stringToNumber = function(str){
//   return parseInt(str, 10);
// }

const stringToNumber = Number

// const stringToNumber = (str) => str|0


console.log(stringToNumber('-123'))