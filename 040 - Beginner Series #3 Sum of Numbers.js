// 040 - Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053


// function getSum(a, b){
//    [a, b] = (a > b) ? [a, b] : [b, a];
//    let hasil = 0;
//    while (a >= b) {
//    	hasil += a;
//    	a--;
//    }
//    return hasil
// }

// function getSum (a, b) {
// 	return Array(Math.abs(a - b)+1).fill(Math.min(a,b)).map((e,i) => e+i).reduce((sum, e) => sum + e, 0)
// }


const getSum = (a, b) => (a + b)*(Math.abs(a-b)+1)/2

console.log(getSum(2,-2)) /*-2 -1 + 0 + 1 + 2 = 0*/
console.log(getSum(1,4)) /*1 + 2 + 3 + 4 = 10*/
