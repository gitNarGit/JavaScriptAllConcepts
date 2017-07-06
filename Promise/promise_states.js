// fulfilled - The action relating to the promise succeeded
// rejected - The action relating to the promise failed
// pending - Hasn't fulfilled or rejected yet - this status can't be resolved. It's a default status
// settled - Has fulfilled or rejected - fulfilled will be in then, rejected in error function

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
