// 023 - Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020

// function squareDigits(num){
//  	let result = '';
//  	num = ''+num;
//  	for(let i=0; i<num.length; i++){
//  		result += num[i]**2;
//  	}
//   	return parseInt(result);
// }


function squareDigits (num){
	return parseInt([...''+num].map((e) => e**2).join(''))
}

console.log(squareDigits(2345))



