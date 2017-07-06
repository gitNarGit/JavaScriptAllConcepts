//Stack is implemented with LIFO in most cases
//it's like poker chips or any other real life stack
//it can only add and delete items from top
//JS engine is using stack when is running JS code.
//Async codes are running only when the stack is empty, that's why they are implemented at last
//stack is emplemented in any array with pop and push
//for example purposes we can create a new Stack class
//JS engine V8 uses stack for processing code

class Stack{
  constructor(arr = []){
    this.stack = arr;
  };
  push(item){
    this.stack.push(item);
  };
  pop(){
    this.stack.pop();
  };
}

let arr = new Stack([1,2,3]);
arr.push("A");
arr.pop();
arr.pop();
console.log(arr.stack);

