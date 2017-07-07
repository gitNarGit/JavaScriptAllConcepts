//for statement
//A for loop repeats until a specified condition evaluates to false.
//A for statement looks as follows:
for ([initialExpression]; [condition]; [incrementExpression])
  statement

var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    alert(myStringArray[i]);
    //Do something
}


//do...while statement
//The do...while statement repeats until a specified condition evaluates to false.
// A do...while statement looks as follows:
do
  statement
while (condition);

var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


//while statement
//A while statement executes its statements as long as a specified condition evaluates to true. 
//A while statement looks as follows:
while (condition)
  statement

var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}


//break statement
//Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.
break [label];

//Example 1
for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}

//Example 2: Breaking to a label

var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}


//continue statement
//The continue statement can be used to restart a while, do-while, for, or label statement.
continue [label];

//Example 1
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

//Example 2
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }


//for...in statement
//The for...in statement iterates a specified variable over all the enumerable properties of an object.
//A for...in statement looks as follows:

for (variable in object) {
  statements
}

//Example
function dump_props(obj, obj_name) {
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}

//for...of statement
//The for...of statement creates a loop Iterating over iterable objects.

for (variable of object) {
  statement
}

//Example

var myArray = [ 1, 2, 3 ];

for (var v of myArray) {
	console.log( v );
}
// 1
// 2
// 3

//The following example shows the difference between a for...of loop and a for...in loop. 
//While for...in iterates over property names, for...of iterates over property values:

let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
