// 006 - Convert boolean values to strings 'Yes' or 'No'.
// https://www.codewars.com/kata/53369039d7ab3ac506000467

// function boolToWord( bool ){
//   return bool ? "Yes" : "No";
// }


// const boolToWord = bool => ["No", "Yes"][+bool];

const boolToWord = bool => bool ? "Yes" : "No";


console.log(boolToWord(true));
console.log(boolToWord(false));