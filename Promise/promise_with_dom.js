// promises are also good for one time DOM events which will run only once
// promises can run only once and can return only one state

let promise = new Promise(function(resolve,reject){
  window.onload = function(){
      resolve("Window is loaded");
  }
});
promise.then(function(result){
  console.log(result);
});
console.log("It's not loaded yet");

