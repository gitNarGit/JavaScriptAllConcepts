//if we want to call a parent method on a child, we can use super
//if we want child to have a constructor, we must use super before using this.
class X{
    constructor(a,b){
      this.a = a;
      this.b = b;
    }
}

class Y extends X{
  constructor(new_a,new_b,c){
    super(new_a,new_b);
    this.c = c;
    console.log(this.a+this.b+this.c);
  }
}

let obj = new Y(1,2,3);
console.log(obj);

//super also can be used on all methods, even in statics
class X1{
  doStuff() {
    return 4;
  }
}

class Y1 extends X1 {
  doStuff() {
      return super.doStuff()+2;
  }
}
let obj1 = new Y1();
console.log(obj1.doStuff());

//we can inherit as many classes as we want. X1->Y1->Z1 : X1->Y1,X1->Z1 ...
