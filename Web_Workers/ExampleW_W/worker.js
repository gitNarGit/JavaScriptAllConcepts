onmessage = function(e) {
  sum(e)
};

function sum(e){
  let sum = 0;
  for(let i=0;i<=e.data;i++){
    if(i%3===0 && i%5===0){
      sum+=i;
    }
  }
  postMessage(sum);

}
/*var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
*/
