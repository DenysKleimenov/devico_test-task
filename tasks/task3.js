"use strict";

function bar(n) {
  const matrix = [];

  for (let row = 0; row < n; row++) {
    matrix[row] = [];

    for (let column = 0; column < n; column++) {
      if (column === row || column + row === n - 1) {
        matrix[row][column] = 2;
      } else if (
        (column > row && column + row < n - 1) ||
        (row > column && row + column > n - 1)
      ) {
        matrix[row][column] = 1;
      } else {
        matrix[row][column] = 0;
      }
    }
  }

  return matrix;
}

console.log(bar(5));
console.log(bar(4));
