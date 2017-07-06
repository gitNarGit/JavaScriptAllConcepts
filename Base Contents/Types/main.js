//Primitives: When you access a primitive type you work directly on its value.
// string - value 'a',"a","abc","10"
// number - value 10,20,4.5,+Infinity(10/0),-Infinity(-10/0),NaN
// boolean - value true false
// null - value null () null is used for mentioning the abscence of the value
// undefined - value undefined

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9

//Complex: When you access a complex type you work on a reference to its value.

// object - value {} obj.x obj[x] object can be called like array
// array - value []  array indexes are always numveric, if not, it becomes an object
// function - value Symbol() always some unique value

const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9

//Immutable types
//all types besides arrays and objects are immutable. That means that there value cannot be changed
let str = "Hello world";
str[0] = "h";
console.log(str); // H is not changing it's value
//all methods with immutable types return new object of that type
let str2 = str.slice(0,5);
console.log(str); // str isn't changing it's value. Instead slice will return a new string
console.log(str2);

//Mutable objects are arrays and objects

//All types besides array and object are primitives
//that means that their values are copied accross each others. they are passed by values
let x = 10;
let y = x;
y = 30;
console.log(x); // x is still 10 because y's default value 10 was just copied

//Arrays and objects are keeping references to datas. they are passed by references
let arr = [1,2,3];
let arr2 = arr;
arr2.push("a");
console.log(arr); // arr has changed it's value because both arrays are just references to the same data