let longstr = "omgomgomgomgomg";
let shortstr = "omg";

function StringSearch(longstr, shortstr) {
  let counter = 0;

  for (let i = 0; i < longstr.length; i++) {
    for (let j = 0; j < shortstr.length; j++) {
      if (longstr[i + j] !== shortstr[j]) break;
      if (j === shortstr.length - 1) counter++;
    }
  }
  return counter;
}

let logger = StringSearch(longstr, shortstr);
console.log(logger);
