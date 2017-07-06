// javascript is single threaded. That means that only one process can run at a time
// promise can return the state and value of any process (mostly async)
// promise will wait until the async code is finished
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