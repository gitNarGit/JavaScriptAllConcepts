//localStorage can store much more information than cookies,
//and they wouldn't be transferred to the server every time
//localStorage is only available for the same domain
//items added to localstorage are never deleted, untill manually deleteing them
//sessionStorage is the same as localStorage, but it's data is deleted after closing tab

//arrays and objects is best to store with JSON.stringify
//this allows us to easily convert back to array or object with JSON.parse
sessionStorage.setItem("data",JSON.stringify({a : 1,b : 2,c : 3}));
console.log(JSON.parse(sessionStorage.data));