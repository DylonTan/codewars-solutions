// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // TODO: Program me
  let zeroCount = 0;

  let filteredArr = arr.filter((el, i) => {
    if (el === 0) zeroCount += 1;

    return el !== 0;
  });

  for (let i = 0; i < zeroCount; i++) {
    filteredArr.push(0);
  }

  return filteredArr;
};
