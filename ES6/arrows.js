//Arrows are a function shorthand using the => syntax.
//They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.
//They support both statement block bodies as well as expression bodies which return the value of the expression. 
//Unlike functions, arrows share the same lexical this as their surrounding code.

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters should be written with a couple of parentheses.
() => { statements }

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
