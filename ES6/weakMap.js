//weakMap is a Map where keys are weakly referenced.
//That means that they can be garbaged if there is no other reference on them
//keys must be only objects
//because references are weak, they are not enumerable. No loop for them
//For having enumerable keys, we should use Map
//main methods: length, delete, get, set, has,
//one of the main differences is that Map will stay in RAM, and WeakMap will be garbaged
//WeakMap is best used for storing data about object by placing it in te value


//an example if we want to keep track of object calls, without making a string reference
let key1 = {a : 1,b : 2};
let wm = new WeakMap();
wm.set(key1,"This object was used 0 times");
console.log(wm);

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

