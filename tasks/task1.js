"use strict";

let totalValue = 0;

function calc(number, operation) {
  if (operation === '+') {
    totalValue += number;
  } else if (operation === '-') {
    totalValue -= number;
  } else if (operation === '*') {
    totalValue *= number;
  } else if (operation === '/') {
    totalValue /= number;
  }

  console.log(totalValue);
}

console.log('First task');

calc(5, "+") // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2

console.log('----------');