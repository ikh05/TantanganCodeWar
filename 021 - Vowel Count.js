// 021 - Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3
const vocal = [...'aeiouAEIOU'];

// function getCount(str) {
// 	// return str.split('').filter((e) => e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u').length
// 	// return [...str].filter((e) => vocal.includes(e)).length;
// 	// return (str.match(/[aeiou]/gi) || []).length
// 	// return (str.match(/[aeiou]/gi) || []).length
// 	// return str.replace(/[^aeiuo]/gi, '').length;
// }

const getCount = str => str.replace(/[^aeiou]/gi, '').length

console.log(getCount('Icang LOVE Acing'))
