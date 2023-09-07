#!/ usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // Create an empty object if w or h is not positive
        this.width = undefined;
        this.height = undefined;
      }
    }
  
    print() {
      if (this.width !== undefined && this.height !== undefined) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  
    rotate() {
      if (this.width !== undefined && this.height !== undefined) {
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
      }
    }
  
    double() {
      if (this.width !== undefined && this.height !== undefined) {
        this.width *= 2;
        this.height *= 2;
      }
    }
  }
  
  module.exports = Rectangle;
  