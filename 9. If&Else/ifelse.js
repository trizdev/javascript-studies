//Conditionals, Control Flows (if else)
//18-35 is my target

let age = prompt('What is your age?');

if ((age >= 18) && (age <= 35)) {
  status = 'target';
  console.log(status);
} else {
  status = 'not my target'
  console.log(status);
}

//switch statements

//difference between weekday and weekend
//day 0 = sunday -> weekend
//day 6 = saturday
//day 4 = thursday -> weekday