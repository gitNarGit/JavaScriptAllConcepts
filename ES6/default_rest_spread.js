//Default + Rest + Spread

//Callee-evaluated default parameter values. 
//Turn an array into consecutive arguments in a function call.
//ind trailing parameters to an array.
//Rest replaces the need for arguments and addresses common cases more directly.

function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
