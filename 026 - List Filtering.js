// 026 - List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// function isNumber (num){
// 	return Number(num) === num;
// }
// function filter_list(l) {
// 	let result = [];
// 	for(let i=0; i< l.length; i++){
// 		if(isNumber(l[i])){
// 			result.push(l[i])
// 		}
// 	}
// 	return result;
// }

// const isNumber = (num) => Number(num) === num;
// const filter_list = list => list.filter(isNumber);

// const filter_list = list => list.filter(e => typeof(e) === 'number');

const filter_list = list => list.filter(Number.isInteger);


console.log(filter_list([1,2,'a','b']));

