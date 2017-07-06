//A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
//In some programming languages, Symbols are called atoms.
//The Symbol() function returns a value of type symbol.
//has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry.
//resembles a built-in object class but is incomplete as a constructor because it does not support the syntax "new Symbol()".

//Note that Symbol("foo") does not coerce the string "foo" into a symbol. It creates a new symbol each time:

Symbol('foo') === Symbol('foo'); // false

//The following syntax with the new operator will throw a TypeError:

var sym = new Symbol(); // TypeError

//If you really want to create a Symbol wrapper object, you can use the Object() function:

var sym = Symbol('foo');
typeof sym;     // "symbol" 
var symObj = Object(sym);
typeof symObj;  // "object"