// Example 1

let promise = new Promise(function(resolve, reject) {
  resolve(1); // fulfilled state, used with then
  reject("something went wrong"); // rejected state. uses with then second parameter
});
//then accepts 2 params 1-fullfilled, 2-rejected
promise.then(function(val) {
  console.log(val); // 1
  return val + 2; // we can send value to next then this way
}).then(function(val) {
  console.log(val); // 3
},function(error){
  console.log(error);
})


// Example 2

let promise = new Promise(function(resolve, reject) {
  let x = 5;
  setTimeout(function(){
    x = 10;
    resolve(x);
  },2000);
});
promise.then(function(result) {
  console.log(result); // 10
});
