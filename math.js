// {1.}....
// <!--varisble type  -->
// <!--1.1 numeric -->
// var price = 11;
// var age = 17;
// var tempeture = 27 degree;

// <!--1.2 string -->
// var person = "sodor uddin";
// var special = "alia bhatt";

// <!--1.3 boolean -->
// var serious = true;
// var isSingle = false;



// 2....<!-- var word can not upper case -->
// Var add1= 56;

// <!-- variable name has to be one word -->
// var price = 56;
// var money = 700;

// <!-- variable name can not starts with a number, but can ends with a number -->
// var club88 = 2024;
// var false = 98;

// <!-- if long names use camel case -->
// var useHomeAddress = "andor killa bandor bon";
// var useCurrentAddress = "bandor bon tualkhali";


// 3.....<!-- Mathmatical operations -->
// <!-- 3.1 addition -->
var orangePrice = 20;
var eggPrice = 7;
var totalPrice = orangePrice + eggPrice;
console.log(totalPrice);

// 3.2 subtractions -->
var onionPrice = 20;
var eggPrice = 7;
var totalPrice = onionPrice - eggPrice;
console.log(totalPrice);

// advance operation -->

// variable declerations -->
var price = 30;
// variable update values -->
price = 30;

// price 1 addition shorthand -->
var price1 = 31;
var price2 = 27;
// add shorthand
// var price1 + = 27;
// console.log(price1);

// var price1 - = 28;
// console.log(price1);

// age shorthand -->
var age = 30;
age ++;
age --;

// string add variable
var firstName = 'jennie';
var lastName = 'kim';
var fullName = firstName + ' ' + lastName
console.log(fullName);

// toFixed parseFloat
var num1 = 0.2;
var num2 = 0.3;
var sum = num1 + num2;
sum = sum.toFixed(2);
sum = parseFloat(sum);
console.log(sum);

//  var=[apple, banana, orange]
// find the index of Banana,and replace banana with mango.
// remove orange and add watermelon.

var fruits=['apple', 'banana', 'orange'];
console.log(fruits[0]);
var index = fruits.indexOf('banana');
console.log(index);

// you are given three numbers 13, 79, 45.write a program that will give a largest number using if-else.


number1 = 13;
number2 = 79;
number3 = 45;

if(number1 >number3 || number1 >number3 || number2 >number3) {
  if(number1 > number2) {
    console.log(number1);
  }
  else{
    console.log(number3);
  }
}
else {
  if(number2>number3){
    console.log(number2);
  }
  else{
    console.log(number3);
  }

}

// timeConvert
function timeConvert(n){
  var num = n;
  var hours = (num/60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours)*60;
  var rMinutes = Math.round(minutes);
  return num + "minutes =" + rhours + " hours (s)" + rMinutes + " minutes (s)";
 }
 console.log(timeConvert(200));
// age is odd or even
 const num = prompt("Please enter a number:");
if (number % 2 == 0){
  console.log("the number is even");
 }
 else{
  console.log("the number is odd");
 }
 var number = 33;
 console.log(number);

