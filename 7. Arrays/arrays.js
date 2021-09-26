//Array

let fruits = ['banana', 'apple', 'orange', 'pineapples'];

let newFruits = new Array('banana', 'apple', 'orange', 'pineapples');

//Both are correct ways to create an array

console.log(fruits[1]); //it will appear apple

console.log(fruits[2]);

//this way you access value at index 2

fruits[0] = 'pear';
console.log(fruits);

//here the value 'banana' is replaced by 'pear' on the array

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//here it is printed one fruit at time until the array is finished.



// array common methods

