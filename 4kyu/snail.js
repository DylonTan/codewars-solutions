// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function (array) {
  // enjoy
  let sortedArr = [];

  while (array.length !== 0) {
    let firstRowLength = array[0].length;

    // Get first row
    for (let i = 0; i < firstRowLength; i++) {
      let current = array[0].shift();

      sortedArr.push(current);
    }

    array.shift();

    if (array.length === 0) break;

    let lastColLength = array.length;

    // Get last column
    for (let j = 0; j < lastColLength; j++) {
      let current = array[j].pop();

      sortedArr.push(current);
    }

    if (array.length === 0) break;

    let lastIndex = array.length - 1;
    let lastRowIndex = array[lastIndex].length;

    // Get last row
    for (let k = lastRowIndex; k > 0; k--) {
      let current = array[lastIndex].pop();

      sortedArr.push(current);
    }

    array.pop();

    if (array.length === 0) break;

    let firstColIndex = array.length - 1;

    // Get first column
    for (let l = firstColIndex; l >= 0; l--) {
      let current = array[l].shift();

      sortedArr.push(current);
    }
  }

  return sortedArr;
};
