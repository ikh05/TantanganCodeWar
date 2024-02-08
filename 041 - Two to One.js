// 041 - Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac


const longest = (s1, s2) => [...(s1+s2)].sort().filter((e, i, arr) => (arr.indexOf(e) === i)).join('');

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join(''); /*Set merupakan himpunan*/


// /*Menambahkan function intersection kepada Set*/
// Set.prototype.intersection = function(setB){
// 	const hasil = new Set();
// 	for(const elem of setB){
// 		if(this.has(elem)) hasil.add(elem)
// 	}
// 	return hasil;
// };	



console.log(longest('a', 'bsdaszzxytaccccccder'))
