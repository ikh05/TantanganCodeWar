// 034 - Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836


// GAGAL
function findOdd(arr) {
	return arr.find(e => arr.filter(el => el === e).length%2 === 1)
}


console.log(findOdd([2,0,4,2,2,6,1,0]))


