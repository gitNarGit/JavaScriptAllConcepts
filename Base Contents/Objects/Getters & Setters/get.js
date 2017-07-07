//There's a subtle, but important, detail about how property accesses are performed.
//Consider:
var myObject = {
	a: 2
};

myObject.a; // 2

//The myObject.a is a property access, but it doesn't just look in myObject for a property of the name a, as it might seem.
//According to the spec, the code above actually performs a [[Get]] operation (kinda like a function call: [[Get]]()) on the myObject. 
//The default built-in [[Get]] operation for an object first inspects the object for a property of the requested name, 
//and if it finds it, it will return the value accordingly.

//But one important result of this [[Get]] operation is that if it cannot through any means come up with a value for the requested property, it instead returns the value undefined.

var myObject = {
	a: 2
};

myObject.b; // undefined

var myObject = {
	a: undefined
};

myObject.a; // undefined

myObject.b; // undefined