// array 1
var array = [1, 2, 3, 4];
console.log(array[2]);

// get element by index
var array = [22, 23, 24, 25, 26, 27, 28, 29, 30];
var element = array [2];
console.log(element);
// set element by index
array[0] = 89;
console.log(array);
// find index of element
var positionIndex = array.indexOf(25);
console.log(positionIndex);
// not found in array
var positionIndex = array.indexOf(188);
console.log(positionIndex);

// array push element
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(45);
console.log(numbers);

// array pop element
console.log(numbers);
numbers.pop();
var element=numbers.pop();
console.log(numbers);
console.log(element);

// comparison function
var iphone = 90000;
var budeget = 100000;
if(iphone < budeget){
    console.log('iphone kine futanir marbo');
}

// comparison function
var chickenPrice = 800;
var money = 1000;
if(chickenPrice <= money){
    console.log('chicken khabo')
}
if(chickenPrice > money){
    console.log('alu bhorta khabo')
}

// comparison function
var isGraduated = true;
var salary = 100000;
if(isGraduated == true && salary > 90000 ){
    console.log('graduated pola')
}
else {
    console.log('batil pola')
}
// comparison function
var isGraduated = true;
var salary = 80000;
if(isGraduated == true || salary > 90000 ){
    console.log('graduation ache tai biye hobe')
}
else {
    console.log('tui batil pola')
}

// comparison between
var Math = true;
var geomatry = false;
var straightLine = false;
if(Math == true){
    if(geomatry == true){
        console.log('graduation')
    }
    else{
        console.log('graduation chai')
    }
}
else {
    console.log('tmi batil pola')
}

// display 1 to 10
var number = 1;
while (number < 10){
    console.log(number);
    number++;
}

            var number = 0;
            while (number < 10){
                console.log(number);
                number++;
                number +2;
            }

            // display 10 times
            for(var i = 0; i < 10; i++){
                console.log('ajke amr mon bhalo nei')
               }
            //    for lop
               var numbers =[1,2,5,6,7,8,9,10,11,12,13,14]
               for(var i = 0; i < numbers.length; i++){
                var number = numbers[i];
                console.log(number)
               }

            //    break open
            var items = ['bottole','water','mouse','sunglass','food'];
            for(var i = 0; i < items.length; i++){
                var item = items[i];
                if(item == 'mouse'){
                  break;
                }
                console.log(item);
               }

             

            //    continue with
            var numbers = [11, 45, 56, 78, 90,100]
            
            for(var i = 0; i < numbers.length; i++){
                var number = numbers[i];
                if(number > 50){
                  continue;
                }
                console.log(number);
              }

            //   while loop in reverse way 
            var num = 10;
         while (num >= 1){
          console.log(num);
          num--;
         }
        //  for loop in reverse way
        for(var i = 0; i <= 10; i++){
            console.log(i);
           }
           for(var i = 0; i > 1; i++){
            console.log(i);
           }

        //    largest number
        num1 = 13;
            num2 = 79;
            num3 = 45;

            if(num1 >num2) {
              if(num1 > num3) {
                console.log(num1);
              }
              else{
                console.log(num3);
              }
            }
            else{
              if(num2 > num3){
              console.log(num2);
            }
            else {
              console.log(num3);
            }
          }

        //   isoseles the number
        side1 = 9;
        side2 = 7;
          side3 = 9;

          if(side1 == side3 || side1 == side2 || side2 == side3){
            console.log('isoceles');
          }
          else{
            console.log('isoceles not');
          }

           //  function callback
           function sum(a, b, c, d, e){
            // console.log(a,b,c,d,e);
            var sum = (a + b + c + d + e);
            console.log(sum);
          }
          sum= (13, 43, 13, 56,34);

          function bringSingara(money) {
            var singaraPrice = 10;
            var quantity = money/singaraPrice;
            return quantity;
           }
           var singaras = bringSingara(200);
           console.log('eating singara:',singaras);

          //  object with
          var shoppingCart = {
            books :3,
            mouse :34,
            pen :8,
            pencil :39,
            rider :35,
            penbooks :39
           }
           for (var propertyName in shoppingCart) {
            const value = shoppingCart[propertyName];
            console.log(shoppingCart, value);
           }

          //  switch options
          // switch (colour){
          //   case 'red':
          //     console.log('you are in danger');
          //     break;
          //   case 'green':
          //     console.log('you are in safe');
          //     break;
          //   case 'yellow':
          //     console.log('you should stop');
          //     break;
          //     default:
          //       console.log('you can go back');
          // }

          // makeavg
          // const array = [1, 2, 3, 4, 5];
          //  function makeAvg(array){
          //   let total = 0;
          //   for (let element of array){
          //     total += element
          //   }
          //   let avg = total/array.length;
          //   return avg
          //  }
          //  const avgMark = makeAvg(array);
          //  console.log(avgMark);

          //  timeConverter
          function timeConvert(n){
            var num = n;
            var hours = (num/60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours)*60;
            var rMinutes = Math.round(minutes);
            return num + "minutes =" + rhours + " hours (s)" + rMinutes + " minutes (s)";
           }
           console.log(timeConvert(200));

          //  leap year
          var year = 2015;
var LeapYear = year % 4;

if (LeapYear==0) {
    alert("This is Leap Year");
} else {
    alert("This is not leap year");
}