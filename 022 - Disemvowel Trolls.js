// 022- Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel (str) {
	let vocals = ['a', 'i', 'u', 'e', 'o']
	let result = '';
	for(let i=0; i<str.length; i++){
		// if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' &&str[i] !== 'u'){
		if(vocals.indexOf(str[i])){
			result += str[i];
		}
	}
	return result;
}


// function disemvowel(str) {
//   // return [...str].filter((e) => !'aeiouAEIOU'.includes(e)).join('');
//   // return str.replace(/[aeiou]/gi, '');
// }




// const disemvowel = str => str.replace(/[aeiou]/gi,'');


console.log(disemvowel("saya makan"));







