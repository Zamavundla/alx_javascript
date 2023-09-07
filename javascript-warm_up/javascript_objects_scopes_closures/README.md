# ALX Program Cohort 0 - Introduction to Software Engineering (20 hours)

These exercises focus on objects and classes.

## Exercise 1: Object Creation

In this exercise, we will learn how to create objects in JavaScript.

```javascript
// Example code for creating an object
const person = {
  name: "John",
  age: 30,
  profession: "Engineer"
};


// Example code for defining a class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Example code for inheritance
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

// Example code for method overriding
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  calculateArea() {
    return this.width * this.width; // Override the parent method
  }
}
