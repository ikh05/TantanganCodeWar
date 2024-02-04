// 014 - Counting sheep
// https://www.codewars.com/kata/54edbc7200b811e956000556

// function countSheeps (sheep) {
// 	let count = 0;
// 	for (let i = 0; i < sheep.length; i++) {
// 		if(sheep[i] === true) count ++;
// 	}
// 	return count;
// }


// function countSheeps(sheep) {
//   return sheep.reduce((sum, el) => sum + (el ? 1 : 0), 0)
// }


// const countSheeps = sheep => sheep.reduce((sum, el) => sum + (el ? 1 : 0), 0);

const countSheeps = sheep => sheep.filter(e => e === true).length;

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))