// Asynchronous javascript and XML
//https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first
//Synchronous AJAX
//If we'll set 3 param xhttp.open("GET", "ajax_info.txt", false); to true the code will become synchronous
//that means the code will run ajax function first, only than our codes.
//But in most browsers synch ajax is deprecated

//states
/*
readyState
0 – The default value when the XMLHttpRequest object is created.
1 – The open() method has been called.
2 – The send() method has been called.
3 – Some data has been retrieved, but the request isn’t finished.
4 – All data has been retrieved and the request is finished.
*/

if(xmlhttp.readyState === 4){
    alert(xmlhttp.responseText)
}

