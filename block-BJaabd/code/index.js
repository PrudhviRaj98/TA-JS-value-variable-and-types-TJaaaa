// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let age = +prompt(`enter the age`);
if (12>age>55){
  console.log(`You can praticipate in the marathon`);
}else if (4>age>11){
  console.log(`You are too young to participate in the marathon`);
}else if (age<4){
  console.log(`Hey Kiddo! Can You Walk ?`);
}else{
  console.log(`You are too old to participate in the marthon`);
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
*/
// [Your code goes here]

let n = +prompt(`enter the value`);
let result = "";
for (let k = 1; k <= n; k++){
  result += "e";
}
console.log(`h${result}llo`);


/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let sum =0;
let natural = +prompt(`natural numbers`);
for(let i=1;i<=natural;i++){
  sum = sum+i;
}
console.log(`sum is ${sum}`);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let value = +prompt(`enter the value `);
switch(value){
  case value = 1:
    alert(`${value} is equal to 1`);
    break;
  case value = 2:
    alert(`${value} is equal to 1`);
    break;
  case value = 3:
    alert(`${value} is equal to 1`);
    break;
  case value = 4:
    alert(`${value} is equal to 1`);
    break;
  case value = 5:
    alert(`${value} is equal to 1`);
    break;
  case value = 6:
    alert(`${value} is equal to 1`);
    break;
  case value = 7:
    alert(`${value} is equal to 1`);
    break;
  case value = 8:
    alert(`${value} is equal to 1`);
    break;
  case value = 9:
    alert(`${value} is equal to 1`);
    break;
  case value = 10:
    alert(`${value} is equal to 1`);
    break;
  default:
    alert(`enter valid input`);
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt(`enter marks`);
switch(marks){
  case marks >90:
    alert(`your grade is AA`);
    break;
  case (marks >80)&&(marks<=90):
    alert(`your grade is AB`);
    break;
  case (marks >70)&&(marks<=80):
    alert(`your grade is BB`);
    break;
  case (marks >70)&&(marks<=80):
    alert(`your grade is BC`);
    break;
  case (marks >60)&&(marks<=70):
    alert(`your grade is CC`);
    break;
  case (marks >50)&&(marks<=60):
    alert(`your grade is CD`);
    break;
  case (marks >40)&&(marks<=50):
    alert(`your grade is DD`);
    break;
  case (marks >30)&&(marks<=40):
    alert(`your grade is FF`);
    break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let numberOne = +prompt(`enter first number`);
let numberTwo = +prompt(`enter second nummbers`);
if (numberOne>numberTwo){
  alert(`numberOne ${numberOne} is larger`);
}else{
  alert(`numberTwo ${numberTwo} is larger`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let numberOne = +prompt(`enter first number`);
let numberTwo = +prompt(`enter Two number`);
let numberThere = +prompt(`enter There number`);
if (numberOne =="+" ||numberTwo =="-"||numberThere =="-" ){
  alert(`sign is +`);
}else if (numberOne =="-" ||numberTwo =="-"||numberThere =="+"){
  alert(`sign is +`);
}else{
  alert(`sign is -`);
}


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let numA = +prompt(`enter first number`);
let numB = +prompt(`enter second number`);
let operation = +prompt(`enter operation`);
if (operation = "+"){
  let sum ;
  sum = numA + numB;
  alert(`sum is ${sum}`);
}else if (operation = "-"){
  if(numA<numB){
    alert(`numB ${numB} is larger`);
  }else {
    let sub;
    sub = numA - numB;
    alert(`subraction is ${sub}`);
  }
}else if (operation = "*"){
  let Mul;
  Mul = numA * numB;
  alert(`multiplication is ${Mul}`);
}else if (operation = "/"){
  if(numA<numB){
    alert(`numB ${numB} is larger`);
  }else {
    let div;
    div = numA / numB;
    alert(`subraction is ${div}`);
  }
}else {
  alert(`invalid operation`);
}