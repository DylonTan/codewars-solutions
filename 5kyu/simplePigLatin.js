// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let strArr = str.split(" ");

  let pigLatin = strArr.map((el, i) => {
    if (el.toLowerCase() == el.toUpperCase()) return el;

    let firstChar = el[0];
    let lastHalf = el.slice(1);

    return lastHalf + firstChar + "ay";
  });

  return pigLatin.join(" ");
}
