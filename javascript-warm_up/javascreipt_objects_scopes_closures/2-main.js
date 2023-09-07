#!/usr/bin/node
const Rectangle = require('./2-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1);

if (r1.width !== undefined && r1.height !== undefined) {
  console.log(r1.width);
  console.log(r1.height);
} else {
  console.log('Invalid rectangle.');
}

const r2 = new Rectangle(2, -3);
console.log(r2);

if (r2.width !== undefined && r2.height !== undefined) {
  console.log(r2.width);
  console.log(r2.height);
} else {
  console.log('Invalid rectangle.');
}

const r3 = new Rectangle(2);
console.log(r3);

if (r3.width !== undefined && r3.height !== undefined) {
  console.log(r3.width);
  console.log(r3.height);
} else {
  console.log('Invalid rectangle.');
}

const r4 = new Rectangle(2, 0);
console.log(r4);

if (r4.width !== undefined && r4.height !== undefined) {
  console.log(r4.width);
  console.log(r4.height);
} else {
  console.log('Invalid rectangle.');
}
