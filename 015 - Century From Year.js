// 015 - Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// function century(year) {
//   return Math.ceil(year/100);
// }

// const century = year => Math.ceil(year/100);

// const century = year => parseInt((year+99)/100);

const century = year => Math.floor((year+99)/100);


console.log(century(2070));




