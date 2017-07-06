//the inheritance is made with keyword extends
class Person{
  constructor(name){
    this.name = name;
  }
  sayHello(){
    console.log("Hello, I am a person and my name is "+this.name);
  }
}
class Man extends Person{
  sayHello(){ // we are overriding parent method. this is called polymorphism
    console.log("Hello, I am a man and my name is "+this.name);
  };
  someOtherStuff(){
    this.x = 10; // x and name are becoming parts of object, while methods are in it's prototype
    //x is available only for Man type objects
    console.log(this.x);
  }
}
let john = new Man("John");
console.log(john); // all the methods are moved to prototype;
john.sayHello();
//note that constructor is inherited to Man
john.someOtherStuff();


//Keeping data private to protect is called “encapsulation”.
//a lot of languages use private keyword to make data enclosed, but in JS there is no special keyword
//it is common to use underscore "_" for data that must be private.
//This is just a naming convention to help developers
//also we can use IIFE
let En = (function(){
  let a = 123;
  class En{
    doStuff(){
      console.log(a);
      a = 456;
      console.log(a);
    }
  }
  return En;
})();

let en = new En();
en.doStuff();
