/**
 * Write fucntion which takes in a string and return counts of each character in the string
 */
function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&  // NUMBERIC
    !(code > 64 && code < 91) &&  // UPPERALPHA
    !(code > 96 && code < 123)    // LOWER ALPHA
  ) {
    return false;
  }
  return true;
}

console.log(charCount("somethingcomplex 909897"));
