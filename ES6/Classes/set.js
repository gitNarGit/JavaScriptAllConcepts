//Set let's you store unique values
//Set is iterable (loops)
// Set's values are always unique

let set = new Set([4,8]);
set.add(5);
set.add(6);
set.add(6); // will be ignored after comparison
console.log(set);

//keys and values in the set are the same
//Sets are useful for storing unique values.

//WeakSets are the same as WeakMaps for Maps. They also don't block garbage from being collected
//also in WeakSets we can store only objects


// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
