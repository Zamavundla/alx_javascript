const Rectangle = require('./2-rectangle');

// Function to check if a rectangle is valid and print its width
function printWidth(rect) {
  if (rect.width !== undefined && rect.height !== undefined) {
    console.log('Instance width:', rect.width);
  } else {
    console.log('Invalid rectangle.');
  }
}

const r1 = new Rectangle(2, 3);
console.log(r1);
printWidth(r1);

const r2 = new Rectangle(2, -3);
console.log(r2);
printWidth(r2);

const r3 = new Rectangle(2, 3);
console.log(r3);
printWidth(r3);

const r4 = new Rectangle(2, 0);
console.log(r4);
printWidth(r4);
