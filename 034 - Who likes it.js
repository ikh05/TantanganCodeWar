// 034 - Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// function likes(names) {
// 	let result = '';
// 	if(names.length === 1){
// 		return names[0] + ' likes this';
// 	}else if(names.length === 2){
// 		result = names[0] + ' and ' + names[1]
// 	}else if(names.length > 2){
// 		result = names.filter((_, i)=> i < 2).join(', ') + ' and ' + ((names.length > 3) ? `${names.length - 2} others`) : names[2];
// 	}else {
// 		return 'no one likes this';
// 	}
// 	return result + ' like this';
// }

function likes (names) {
	names = names || [];
	switch (names.length) {
		case 0 	: return `no one likes this`;
		case 1 	: return `${names[0]} likes this`;
		case 2 	: return `${names[0]} and ${names[1]} like this`;
		case 3 	: return `${names[0]}, ${names[1]}, and ${names[2]} likes this`;
		default : return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`
	}
	
}




console.log(likes(['ikhsan', 'humaira', 'icang', 'acing', 'ich']))