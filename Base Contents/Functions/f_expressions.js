// Function expressions are almost the same F declarations, besides hoisting feature.
// We can say that sum is equal to function body, and can be called with ()
let sum = function(x,y){
  return x+y;
}

// they are anonymous functions and are very good as a callback functions
function doSomething(param,f){
  if(param==1){
    f(param);
  }
}
doSomething(1,function(e){
  let sum = e+2;
  console.log(sum);
});
doSomething(1,function(e){
  let div = e/2;
  console.log(div);
});
