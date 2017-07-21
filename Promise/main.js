// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// javascript is single threaded. That means that only one process can run at a time
// promise can return the state and value of any process (mostly async)
// promise will wait until the async code is finished

// A Promise is in one of these states:
    // pending: initial state, neither fulfilled nor rejected.
    // fulfilled: meaning that the operation completed successfully.
    // rejected: meaning that the operation failed.
    // settled: has fulfilled or rejected - fulfilled will be in then, rejected in error function


// Syntax
new Promise( /* executor */ function(resolve, reject) { ... } );

// Creating a Promise
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});