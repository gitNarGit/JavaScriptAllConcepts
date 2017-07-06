//hoisting is not working with 'let'
//console.log(y()); //Error
let x = 10;
let y = function(){
  return 20;
}

//hoisting is working only with 'var'.
//variable hoisting
//this:
console.log(x);
var z = 10;
//is interpreted as:
var z;
console.log(x);
z = 10;
//that's why z will be undefined
//function hoisting
//this:
console.log(f1())
function f1(){
  return 123
}
//Is the same as:
function f1(){
  return 123
}
console.log(f1())

//arrow functions and function expressions are not hoisted because they are assigned to variable and work as varaible hoisting:
console.log(f2()); //Error
var f2 = () => ({x:1,y:2})




console.log(x); //undefined
console.log(z);

var x = 10; 
var y = 6;
var z = 7;

var k = function(){
  console.log(y);
}

