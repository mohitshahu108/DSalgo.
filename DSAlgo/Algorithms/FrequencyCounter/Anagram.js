/**
 *  Given two strings, write a function to determine if the second string is an anagrams of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 */

// My solution
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let str1Counter = {};
//   let str2Counter = {};
//   //return true/false
//   for (let val of str1) {
//     str1Counter[val] = (str1Counter[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     str2Counter[val] = (str2Counter[val] || 0) + 1;
//   }

//   for(let key in str1Counter){
//     if(!(key in str2Counter)){
//       return false
//     }
//   }
//   return true;
// }

/**My mentor's solution */

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

let logger = validAnagram("leeeo", "oeeel");
console.log(logger);
