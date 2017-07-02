//Template Strings use back-ticks (``) rather than the single or double quotes we're used to with regular strings.
var greeting = `Yo World!`;

//Template Strings can contain placeholders for string substitution using the ${ } syntax.
// Simple string substitution
var name = "Brendan";
console.log(`Yo, ${name}!`);

// => "Yo, Brendan!"

//We can use expression interpolation to embed for some readable inline math.
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

//=> JavaScript first appeared 20 years ago. Crazy!

console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);
//=> The number of JS frameworks is 40 and not 200.

//They are also very useful for functions inside expressions.
function fn() { 
    return "I am a result. Rarr"; 
}
console.log(`foo ${fn()} bar`);
//=> foo I am a result. Rarr bar.

//The ${} works fine with any kind of expression, including member expressions and method calls.
var user = {name: 'Caitlin Potter'};
console.log(`Thanks for getting this into V8, ${user.name.toUpperCase()}.`);

// => "Thanks for getting this into V8, CAITLIN POTTER";

// And another example
var thing = 'drugs';
console.log(`Say no to ${thing}. Although if you're talking to ${thing} you may already be on ${thing}.`);

// => Say no to drugs. Although if you're talking to drugs you may already be on drugs.

//Tagged Templates transform a Template String by placing a function name before the template string. 
//For example:
fn`Hello ${you}! You're looking ${adjective} today!`

fn(["Hello ", "! You're looking ", " today!"], you, adjective);

