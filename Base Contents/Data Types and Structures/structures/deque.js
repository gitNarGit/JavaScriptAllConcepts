class Deque{
  constructor(arr = []){
    this.deque = arr;
  };
  pushFront(item){ // inserting from start
    this.deque.unshift(item);
  };
  pushBack(item){
    this.deque.push(item);
  };
  popBack(){ // removing from end
    this.deque.pop();
  };
  popFront(){
    this.deque.shift();
  }
}

let arr = new Deque([1,2,3]);
arr.pushFront("A");
arr.pushBack("B");
arr.popBack();
arr.popFront();
console.log(arr.deque);
