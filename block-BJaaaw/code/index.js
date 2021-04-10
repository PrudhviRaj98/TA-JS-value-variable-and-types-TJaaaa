// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = Number(prompt("number"));
if(number % 2 == 0){
  alert("number is even");
}
else{
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let numberOne = Number(prompt("enter first number"));
let numberTwo = Number(prompt("enter second number"));
if (numberOne>numberTwo){
  alert(`numberOne is max value ${numberOne}`)
}
else{
  alert(`numberTwo is max value ${numberTwo}`)
}

// 3. Convert the above code using`?` terniary operator

numberOne > numberTwo ? alert(`numberOne is max value $(numberOne)`):alert(`numberTwo is max value $(numberTwo)`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("enter house name");
if (houseName === "stark"){
  alert("winter is coming");
}else if (houseName === "lannister"){
  alert("A lannister always pays his debt");
}else{
  alert("All men must die")
}

// 5. Convert the above code using`?` terniary operator

houseName ==="stark"?alert("winter is coming"):houseName === "lannister"?alert("A lannister always pays his debt"):alert("All men must die")

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("enter month number"))
switch(month){
  case 1:
    alert("days in a month 29");
    break;
  case 2:
    alert("days in a month 28");
    break;
  case 3:
    alert("days in a month 27");
    break;
  case 4:
    alert("days in a month 26");
    break;
  case 5:
    alert("days in a month 24");
    break;
  case 6:
    alert("days in a month 23");
    break;
  case 7:
    alert("days in a month 22");
    break;
  case 8:
    alert("days in a month 21");
    break;
  case 9:
    alert("days in a month 20");
    break;
  case 10:
    alert("days in a month 19");
    break;
  case 11:
    alert("days in a month 18");
    break;
  case 12:
    alert("days in a month 17");
    break;
  default:
    alert("not a valid ");
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary =Number(prompt("enter the salary"));
let inHand;
let taxAmount;
if(salary<=20000){
  taxAmount = 0.1;
  inHand = salary - taxAmount;
}else if (salary<=40000)  {
  taxAmount = (20/100);
  inHand = salary - taxAmount;
}else {
  taxAmount=(30/100);
  inHand = salary - taxAmount;
}

switch(true){
  case salary<=20000:
    inHand = (salary * 10)/100;
  case salary<=40000:
    inHand = (salary * 20)/100;
    break
  case salary<=40000:
    inHand = (salary * 30)/100;
    break   
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("enter marks"));
if (marks > 100){
  alert("marks cant't be greater than 100")
}else if(marks > 80 && marks < 100) {
  alert("Grade A")
}else if(marks > 50 && marks < 80) {
  alert("Grade B")
}else if(marks > 30 && marks < 50) {
  alert("Grade C")
}else{
  alert("Grade D")
}

switch(true){
  case marks > 100:
    alert("marks cant't be greater than 100");
    break;
  case marks > 80 && marks < 100 :
    alert("marks cant't be greater than 100");
    break;
  case marks > 50 && marks < 80:
    alert("marks cant't be greater than 100");
    break;
  default:
    alert("not valid");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("enter conndition of the wheather");
if (weather = "sunny"){
  alert("wear a T-shirt");
}else if (weather == "rainy"){
  alert("dont't forget to take your raincoat");
}else if (weather == "hot"){
  alert("get a hanky");
}else if (weather == "freezing"){
  alert("get your sweeter on");
}else {
  alert("not a valid input");
}

switch(weather){
  case "sunny":
    alert("wear a T-shirt");
    break;
  case "rainy":
    alert("wear a T-shirt");
    break;
  case "hot":
    alert("wear a T-shirt");
    break;
  case "freezing":
    alert("wear a T-shirt");
    break;
  default:
    alert("not a valid");
    break;
}