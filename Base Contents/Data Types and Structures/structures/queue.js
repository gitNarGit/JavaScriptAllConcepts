//queue is mostly a FIFO pattern
//queue is translated as hert (haci hert))
//queue is used for browser loop
class Queue{
  constructor(arr = []){
    this.queue = arr;
  };
  enqueue(item){ // inserting from start
    this.queue.unshift(item);
  };
  dequeue(){ // removing from end
    this.queue.pop();
  };
}

let arr = new Queue([1,2,3]);
arr.enqueue("A");
arr.dequeue();
arr.dequeue();
console.log(arr.queue);
