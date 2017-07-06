// Map is a new feature for creating associative arrays.
//in JS everything is an object, but also we can say that everything is an associative array
// We should prefer using maps over objects when we need just a data storage like arrays
//and we should prefer using objects when they are complete logical units
//also use maps for dinamic changing data
//Differences:
//objects keys are always strings, while in map they can be any type
//map always have default property size
//maps are iterable with for of loops
let obj = {
  a : 1
};
console.log(obj);

let map = new Map();
map.set("a",1);
for(let i of map){
  console.log(i[0] + " = " + i[1])
}
//console.log(map);


// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

