#!/ usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Calls the constructor of the parent class (Rectangle)
  }
}

module.exports = Square;
