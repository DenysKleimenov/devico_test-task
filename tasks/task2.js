"use strict";

const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

function foo(obj) {
  for (const prop in obj) {
    switch (obj[prop]) {
      case 1:
        obj[prop] = 0;
        break;
      case 0:
        obj[prop] = 1;
        break;
      default: 
        obj[prop] = foo(obj[prop]);
        break;
    }
  }

  return obj;
}

console.log('Second task');

foo(d);
console.log(d);

console.log('-----------');