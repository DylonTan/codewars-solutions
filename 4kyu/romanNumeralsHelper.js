// Task
// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// | Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |

// TODO: create a RomanNumerals helper object
let RomanNumerals = {
  mappedNumerals: {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  },

  toRoman: function (number) {
    let num = number;
    let roman = "";

    while (num > 0) {
      recheck: for (let key in this.mappedNumerals) {
        if (num >= this.mappedNumerals[key]) {
          roman += key;
          num -= this.mappedNumerals[key];
          break recheck;
        }
      }
    }

    return roman;
  },

  fromRoman: function (roman) {
    let number = 0;
    let romanArr = roman.split("");

    for (let i = 0; i < romanArr.length; i++) {
      let double = this.mappedNumerals[romanArr[i] + romanArr[i + 1]];
      let single = this.mappedNumerals[romanArr[i]];

      if (double !== undefined) {
        number += double;
        i += 1;
      } else if (single !== undefined) number += single;
    }

    return number;
  },
};
