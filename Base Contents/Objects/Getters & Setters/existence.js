//We can ask an object if it has a certain property without asking to get that property's value:

var myObject = {
	a: 2
};

("a" in myObject);				// true
("b" in myObject);				// false

myObject.hasOwnProperty( "a" );	// true
myObject.hasOwnProperty( "b" );	// false

//The in operator will check to see if the property is in the object, or if it exists at any higher level of the [[Prototype]] chain object traversal.
