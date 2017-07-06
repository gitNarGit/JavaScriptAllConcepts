//Arrows are a function shorthand using the => syntax.
//They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.
//They support both statement block bodies as well as expression bodies which return the value of the expression. 
//Unlike functions, arrows share the same lexical this as their surrounding code.
//// arrow function does not bind its own this and they have a shorter syntax


(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters should be written with a couple of parentheses.
() => { statements }

//usual function
function f1(x,y){
  return x+y;
}
//arrow function
let f2 = (x,y) => {return x+y;}
//if only one expression is returned, we can skip curly braces
let f3 = (x,y) => x*y;
//if only one param is required parentheses can also be skipped
let f4 = x => x*x;
//but if no parameters required, then we need parentheses
let f5 = () => 456;
// we can return an object, but it must be wrapped with parentheses
let f6 = () => ({x:1,y:2})

//Let’s take example that iterates over an Array using Array.prototype.map:

var numbers = [1,2,3,4,5];
var timesTwo = numbers.map((number) => number * 2);
console.log(timesTwo); // [2, 4, 6, 8, 10]


// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
