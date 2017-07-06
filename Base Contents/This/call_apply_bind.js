//this methods can be used to replace execution context of this and make it to use another object
// the difference of call and apply is that call is getting params one by one, while apply is getting them from one single array
function add (a, b) {
    return a + b;
}
// these 3 calls are the same. in this case 'this' is equal to window
console.log(add(1, 2));
console.log(add.call(this, 1, 2));
console.log(add.apply(this, [1, 2]));


// call and apply invoked immediately
function multiply(y,z){
  return this.x*y*z;
}
let obj1 = {
  x : 2
}
let obj2 = {
  x : 3
}
console.log(multiply.call(obj1,2,3)); // call can only set params one by one
console.log(multiply.call(obj2,2,4));
console.log(multiply.apply(obj2,[2,4])); // apply lets us to use array as parameters

//bind is useful for events, callbacks, async contexts because it returns a function which can be called later
