"use strict";

const addOne = (num = 10) => {
  num++;
  return num;
};

function addTwo(num) {
  return num + 2;
}

console.log(addTwo(0));
console.log(addTwo(2));
console.log(addTwo(4));
console.log(addTwo(6));
console.log(addTwo(8));

console.log(addOne(20));
console.log(addOne());
console.log(addOne(35));
