// Constructors are also functions, which names are Uppercase, they use 'this' and are used for creating object instances
function F1(){
  this.x = 1;
  this.y = function(){
    return this.x;
  }
}

//Constructors also have prototype object built in, which is used for inheriting and for creating a proto chain

F1.prototype.z = function(){
  return this.x;
}
let x1 = new F1();
console.log(x1);
console.log(x1.y());
console.log(x1.z());
// y() is a part of x1 object, but z() is a part of F1 constructor which is just available for x1
//y() will be copied to every instance of the object, but z() won't
