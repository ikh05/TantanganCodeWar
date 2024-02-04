// 013 - Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2


class SmallestIntegerFinder {
  // findSmallestInt(args) {
  //   return args.reduce((res, el) => res > el ? el : res, Infinity);
  // }



  // findSmallestInt (args){
  //   return Math.min(...args);
  // }

  findSmallestInt (args){
    return args.sort((a,b) => a-b)[0] /*b-a urutkan dari yang terkecil*/
    // return args.sort((a,b) => b-a) /*b-a urutkan dari yang terbesar*/
  }
}



const sif = new SmallestIntegerFinder;
console.log(sif.findSmallestInt([4,5,6,7,-32,9]))