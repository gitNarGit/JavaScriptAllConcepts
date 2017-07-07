//Arrays also use the [ ] access form, but they have slightly more structured organization for how and where values are stored (though still no restriction on what type of values are stored). 
//Arrays assume numeric indexing, which means that values are stored in locations, usually called indices.
var myArray = [ "foo", 42, "bar" ];

myArray.length;		// 3

myArray[0];			// "foo"

myArray[2];			// "bar"

//Arrays are objects, so even though each index is a positive integer, you can also add properties onto the array:
var myArray = [ "foo", 42, "bar" ];

myArray.baz = "baz";

myArray.length;	// 3

myArray.baz;	// "baz"

//If you try to add a property to an array, but the property name looks like a number, 
//it will end up instead as a numeric index (thus modifying the array contents):
var myArray = [ "foo", 42, "bar" ];

myArray["3"] = "baz";

myArray.length;	// 4

myArray[3];		// "baz"