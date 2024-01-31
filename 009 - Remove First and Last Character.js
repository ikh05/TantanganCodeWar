// 009 - Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// function removeChar(str){
//  let result = '';
//  for(let i = 1; i<str.length; i++){
//  	if(i < str.length-1) result += str[i];
//  }
//  return result;
// };


// function removeChar (str) {
// 	return str.split('').filter((e,i) => i > 0 && i < str.length-1).join('');
// }


// function removeChar (str) {
// 	return str.substring(1, str.length-1);
// }


// const removeChar = str => str.slice(1, str.length-1);

// const removeChar = str => str.slice(1, -1);

// const removeChar = str => {
// 	resalt = str.split('')
// 	resalt.shift() /*hilangkan element index ke awal | tidak mengembalikan array (referens*/
// 	resalt.pop() /*hilangkan element index ke akhir | tidak mengembalikan array (referens)*/
// 	return resalt.join('');
// }

const removeChar = str => str.substring(1, str.length-1); /*auto cek min dan max*/

console.log(removeChar('abscds'))
