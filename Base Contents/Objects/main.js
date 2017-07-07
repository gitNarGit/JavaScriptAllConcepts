//An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair
//where key is a string (also called a “property name”), and value can be anything.

//Objects come in two forms: the declarative (literal) form, and the constructed form.

var myObj = {
	key: value
	// ...
};

//The constructed form looks like this:
var myObj = new Object();
myObj.key = value;

//The constructed form and the literal form result in exactly the same sort of object. 
//he only difference really is that you can add one or more key/value pairs to the literal declaration, 
//whereas with constructed-form objects, you must add the properties one-by-one.

//Type

// string
// number
// boolean
// null
// undefined
// object

//Note that the simple primitives (string, number, boolean, null, and undefined) are not themselves objects.

//It's a common mis-statement that "everything in JavaScript is an object". This is clearly not true.
//function is a sub-type of object (technically, a "callable object").
//Functions in JS are said to be "first class" in that they are basically just normal objects.
//Arrays are also a form of objects, with extra behavior.

//Built-in Objects

// String
// Number
// Boolean
// Object
// Function
// Array
// Date
// RegExp
// Error

//For instance:
var strPrimitive = "I am a string";
typeof strPrimitive;							// "string"
strPrimitive instanceof String;					// false

var strObject = new String( "I am a string" );
typeof strObject; 								// "object"
strObject instanceof String;					// true

// inspect the object sub-type
Object.prototype.toString.call( strObject );	// [object String]


//Contents

//As mentioned earlier, the contents of an object consist of values (any type) stored at specifically named locations, which we call properties.
//Consider:
var myObject = {
	a: 2
};

myObject.a;		// 2

myObject["a"];	// 2
//To access the value at the location a in myObject, we need to use either the . operator or the [ ] operator. 

//In objects, property names are always strings. 
var myObject = { };

myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";

myObject["true"];				// "foo"
myObject["3"];					// "bar"
myObject["[object Object]"];	// "baz"


//Computed Property Names

//The myObject[..] property access syntax we just described is useful if you need to use a computed expression value as the key name, like myObject[prefix + name].
//ES6 adds computed property names, where you can specify an expression, surrounded by a [ ] pair.
var prefix = "foo";

var myObject = {
	[prefix + "bar"]: "hello",
	[prefix + "baz"]: "world"
};

myObject["foobar"]; // hello
myObject["foobaz"]; // world

