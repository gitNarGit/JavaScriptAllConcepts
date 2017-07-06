//Closures are functions that can remember variables, declared in the same scope, but without acces from any other place
function x(){
  let a = 1;
  return function y(){
    console.log(a);
  }
}
let z = x();
z();
// variable 'a' is not available from any place,
//but z() can remember it, because they were created in the same scope.
//a is called free or independent variable.
//this method of Closures is heavily used for closing variables from outside. Coffee Machine example
//this method is also used in Modular Design Pattern (later on this)
//one of the best examples: https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_counter
