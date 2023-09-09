#!/ usr/bin/node
const Rectangle = require('./2-rectangle');

// Function to check if a rectangle is valid and print its width
function printRectangle(rect) {
  console.log(rect);
  console.log(rect.width);
  console.log(rect.height);
}

const r1 = new Rectangle(2, 3);
printRectangle(r1);

const r2 = new Rectangle(2, -3);
printRectangle(r2);

const r3 = new Rectangle(2);
printRectangle(r3);

const r4 = new Rectangle(2, 0);
printRectangle(r4);
