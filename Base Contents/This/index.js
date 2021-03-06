//this is available in execution context
//global context
console.log(this); // window object
console.log(this.document === document); // true
this.a = 37;
console.log(window.a); // 37

//local context
function f1(){
  return this;
}
console.log(f1()===window)

function f1(){
  //'use strict';
  return this;
}
console.log(f1()===undefined) // true in strict mode
function F2(){
  this.x = 123;
}
let obj = new F2();
console.log(obj.x); // this refers to obj because is executed in obj context

let obj2 = {
  x : 123,
  y : function(){
    console.log(this.x)
  }
}
obj2.y() // prints 123 because this refers to obj2 and y is executed on obj2 context
