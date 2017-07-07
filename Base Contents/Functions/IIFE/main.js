//Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. 
//Note that in a world with modules everywhere, you almost never need an IIFE.
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());


// iife is running immediately and is creating a closure
(function(){
  let x = 123;
})();
//console.log(x); // Error x is not defined


//other ways to enforce a function expression
!function () { // ! + ~ -
console.log(123)
}();

//passing parameters
(function(x,y){
  console.log(x+y)
})(1,2);


//iife is also used for making private properties
//this is also known as a basic scheme for Modular Design Pattern
let menu = (function(){
    let data = ["home","news","about us"];
    return {
      showMenu : function(){
        return data;
      },
      addMenu : function(item){
        data.push(item);
      },
      deleteMenu : function(item){
        let index = data.indexOf(item);
        data.splice(index,1);
      }
    };
})();
console.log(menu.showMenu());
menu.addMenu("contacts");
menu.deleteMenu("news");
console.log(menu.showMenu());

