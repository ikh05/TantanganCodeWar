// 027 - Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1


// function isIsogram(str){
// 	if(str.length === 0) return true;
// 	console.log(str.length)
// 	let arr = str.toLowerCase().split('');
// 	for(let i=str.length; i>0; i--){
// 		for(let j=i-1; j>0; j--){
// 			if(arr[i-1] === arr[j-1]) return false;
// 		}
// 	}
// 	return true;
// }

// const isIsogram = str => new Set(str.toLowerCase()).size === str.length;

const isIsogram = str => str.toLowerCase().split('').every((e,i,arr)=> arr.indexOf(e) === i)

console.log(isIsogram('Oo'))
console.log(isIsogram('sabfs'))
console.log(isIsogram(''))


