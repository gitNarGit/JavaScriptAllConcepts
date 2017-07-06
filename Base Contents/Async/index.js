// JS is single threaded: only one process can run at a time
// To be non blocking, JS is passing async code to the LOOP
// loop is a place where all blocking codes are gathered and run one at a time.
// For example timeout and interval are set in loop, and JS engine continously loops on them and runs commands when they are available.
// timeout is set 2seconds, that means JS engine will skip it and run interval 1s, then loop again and run timeout
setTimeout(function(){
  console.log("Timeout");
},2000);
setInterval(function(){
  console.log("interval");
},1000);
console.log("JS is not blocking input output");

