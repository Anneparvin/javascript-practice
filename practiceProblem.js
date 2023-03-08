



// 1..Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.

var money = 1000;
var cost = 700;
var result = money - 700;
console.log(result);

// 2....Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
var Mathematics =5.25
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;
var average = 75.25 + 65 + 80 + 35.45 + 99.50;
average = average.toFixed(2);
console.log(average);

// 3..John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.

var firstLine = "I am going to be";
var secondLine = "an awesome web developer";
var thirdLine = firstLine +" "+ secondLine;
console.log(thirdLine);

// 4...Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.

var number = 119;
var devider = number / 5;
console.log(devider);

//  var=[apple, banana, orange]
// find the index of Banana,and replace banana with mango.
// remove orange and add watermelon.

var fruits=['apple', 'banana', 'orange'];
var index = fruits.indexOf('banana');
console.log(index);