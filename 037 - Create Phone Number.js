// 037 - Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83


const createPhoneNumber = arr => arr.join('').replace(/(...)(...)(...)/, '($1) $2-$3')

// const createPhoneNumber = (arr) => `(${arr.splice(0,3).join('')}) ${arr.splice(0,3).join('')}-${arr.join('')}`;


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
