<div id="d1" style="background:green">
  outter div
  <div id="d2" style="background:red">
    inner div
  </div>
</div>
//when event occurs in nested element, we can set their order, with capturing and bubbling
//event capture - this way it will look at first to the parent event, then to the child
//uncomment
//document.getElementById("d1").addEventListener("click",showId,true); //capture
//document.getElementById("d2").addEventListener("click",showId,true); //capture

//event bubbling
//third param = false (false is the default value)
//this way it will look to the child element at first
//uncomment
//document.getElementById("d1").addEventListener("click",showId,false); //bubble
//document.getElementById("d2").addEventListener("click",showId,false); //bubble

function showId(){
    console.log(this.id)
}
