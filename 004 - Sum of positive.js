// 004 - Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// function positiveSum (arr) {
// 	let result = 0;
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i] > 0){
// 			result = result + arr[i];
// 		}
// 	}
// 	return result;
// }


// function positiveSum(arr) {
//  return arr.reduce((total, anggota) => (anggota > 0) ? total + anggota : total);
// }

const positiveSum = arr => arr.reduce((total, anggota) => (anggota > 0) ? total + anggota : total, 0); 


console.log(positiveSum([]));