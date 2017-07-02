//Always use class. Avoid manipulating prototype directly.
//Why? class syntax is more concise and easier to reason about.
//Class declarations.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Methods can return this to help with method chaining.

//Hoisting
//An important difference between function declarations and class declarations is that function declarations are hoisted 
//and class declarations are not. You first need to declare your class and then access it, otherwise code like the following 
//will throw a ReferenceError:

var p = new Rectangle(); // ReferenceError

class Rectangle {} // :((


//Class expressions
// unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//Prototype methods
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area);

//Sub classing with extends
//Use extends for inheritance.
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Lifey');
d.speak(); // Lifey barks.

//Super class calls with super
class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('Fuzzy');
l.speak(); 
// Fuzzy makes a noise.
// Fuzzy roars.