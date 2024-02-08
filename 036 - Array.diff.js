// 036 - Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009


// const arrayDiff = (a, b) => a.filter(e => b.indexOf(e) === -1)

// const arrayDiff = (a, b) => a.filter(e => !b.includes(e))

// const arrayDiff = (a, b) => a.filter(e => b.find(el => el === e) === undefined)


console.log(arrayDiff([1, 2, 2, 3, 0], [1, 2]))
