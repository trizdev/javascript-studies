//variables

var b = 'banana'
console.log(b);

var someNumber = 45;
console.log(someNumber);
// if I quote 'someNumber' it will become a string. It will appear on the console the text someNumber instead of 45.

document.getElementById('someText').innerHTML = 'Other text';

//by using this I can change my html page using Javascript. Now it will appear 'other text' instead of 'sometext'

prompt('what is your age?');
//i'm asking this but I cannot save this information

var name = prompt('Whats your name?');

// Now i'm saving the name in a variable. but it won't //appear on console.

document.getElementById('someText').innerHTML = name;
