// 016 - Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// function basicOp(operation, value1, value2){
// 	switch (operation){
// 	 	case '+':
// 	 	case '-':
// 	 	case '*':
// 	 	case '/':
// 	 		return eval(value1 + operation + value2);
// 	 	default:
// 	 		return "operation tidak dikenali";
// 	}
// }


// const basicOperation = {
// 	'+' : (a, b) => a + b;
// 	'*' : (a, b) => a * b;
// 	'-' : (a, b) => a - b;
// 	'/' : (a, b) => a / b;
// }
// const basicOp = (o,a,b) => [o]


const basicOp = (op, a, b) => eval(a + op + b);

console.log(basicOp(':', 4, 5));