//functions

//1. creating a function

function test(){
  console.log('this is a function');
}

//I created the function and now I need to call it

//2. Calling the function

test();

/* Let's create a function that asks a name and says hello followed by your name

Name: Ana
Return: Hello Ana!*/


function greeting(){
  var name = prompt('What is your name?');
  var result = 'Hello ' + name + '!'; //string concatenation
  console.log(result);
}

greeting();

//other option:

let name = prompt("What is your name, please?")

function salute(){
  let result = 'Nice to meet ya, ' + name;
  console.log(result)
}

salute();

// Arguments in a function

//Every function will have an input. In the function above the input is the name.

//How add 2 numbers in a function

function sumNumbers(num1, num2){
  let result = num1 + num2;
  console.log(result); // it reads it out
}

sumNumbers(10, 20); //you cant call with the () empty. You have to give it an argument.


