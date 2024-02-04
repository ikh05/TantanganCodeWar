// 024 - Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = (n) => +[...''+n].sort((a,b) => b-a).join('');

console.log(descendingOrder(123232222))