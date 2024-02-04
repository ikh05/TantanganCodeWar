// 030 - Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9


// const findShort = s => s.split(' ').map(e => e.length).sort((a,b) => a-b)[0];

// const findShort = s => Math.min(...s.split(' ').map(e => e.length));

const findShort = s => s.split(' ').sort((a, b) => b.length - a.length).pop().length;


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
