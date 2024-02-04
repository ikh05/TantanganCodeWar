// 020 - Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const abbrevName = (name) => name.split(' ').map((e) => e[0]). join('.').toUpperCase();

console.log(abbrevName("Ikhsan dan Humaira"))