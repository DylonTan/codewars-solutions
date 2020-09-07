// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.
let arr = [];

function permutations(string) {
  permute(string, 0, string.length - 1);
  return arr;
}

function permute(string, left, right) {
  if (left === right) arr.push(string);
  else {
    for (let i = left; i <= right; i++) {
      string = swap(string, left, i);
      permute(string, left + 1, right);
      string = swap(string, left, i);
    }
  }
}

function swap(string, x, y) {
  let strArr = string.split("");
  let temp = strArr[x];
  strArr[x] = strArr[y];
  strArr[y] = temp;
  return strArr.join("");
}
