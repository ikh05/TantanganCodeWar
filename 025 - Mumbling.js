// 025 - Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// function accum (s) {
// 	return [...s]
// 		.map((e,i) => Array(i+1)
// 			.fill()
// 			.map((_, _i) => _i === 0 ? e.toUpperCase() : e.toLowerCase())
// 			.join(''))
// 		.join('-');
// }

// function accum (s) {
// 	return [...s].map((e, i) => e.toUpperCase() + Array(i).fill(e).join('')).join('-');
// }

// function accum (s) {
// 	return [...s].map((e,i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-');
// }

function accum (s){
	return [...s].map((e,i) => e.toUpperCase() + Array(i+1).join(e.toLowerCase())).join('-')
}

console.log(accum('asd'))