class Y{
  constructor(){
    this.b = 456;
  }
  doStuff(){

  }
}
class X extends Y{
  constructor(){
    super();
    this.a = 123;

  }
  doOtherStuff(){

  }
}
let x = new X();
//instanceof is checking if the object is a type of current class or it's parent
console.log(x instanceof X); // true
console.log(x instanceof Y); // true
for(let i in x){
  console.log(x[i]); // 'in' operator will show only properties from all inheritances
}
