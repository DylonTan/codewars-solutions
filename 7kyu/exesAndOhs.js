// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //code here
  let xCount = 0;
  let oCount = 0;

  let strArr = str.split("").map((el, i) => el.toLowerCase());

  strArr.forEach((el, i) => {
    if (el === "x") xCount += 1;
    else if (el === "o") oCount += 1;
  });

  return xCount === oCount;
}
