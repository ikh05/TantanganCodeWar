// 032 - Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
// const maskify = cc => (cc.length > 4) ? Array(cc.length - 4).fill("#").join('') + cc.slice(-4) : cc;

const maskify = cc => cc.slice(0,-4).replace(/./g, "#") + cc.slice(-4);

// const maskify = cc => cc.replace(/.(?=....)/g, '#');

console.log(maskify('4554343434343'))