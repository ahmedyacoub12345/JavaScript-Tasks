/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
function numLarger(a,b){
    if (a>b){
        console.log("a Larger than b");
    }
    else{
        console.log("b Larger than a");
    }
}
numLarger(5,6);
//

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - 
*/
/******* Start Your Code *********/

var arr = [ 3, -7, 2 ];
const sign = arr => {
    let a = arr.length;
    for(let i=0 ; i<a; i++){
        for(let n=0 ; n<a ;n++){
            if(arr[n] > arr[n+1]){
                console.log("The number sign is ( - )"+arr[n+1]);
            }
        }
    }
};
sign(arr);

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
var arr1 = [ 0, -1, 4  ];
const sort1 = arr1 => {
    let a = arr1.length;
    for(let i=0 ; i<a; i++){
        for(let n=0 ; n<a ;n++){
            if(arr1[n] < arr1[n+1]){
                let f = arr1[n];
                arr1[n] = arr1[n+1];
                arr1[n+1] = f;
            }
        }
    }
    return arr1;
};
sort1(arr1);
console.log(arr1);

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
var arr2 = [ -5, -2, -6, 0, -1 ];
let large=arr2[0]
for(let i=0;i<arr2.length;i++){
    if(arr2[i]>large){
        large=arr2[i];
    }
}
console.log(large);
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
function compare(a,b){
    if (a>b){
        console.log("Hello World!");
    }
    else{
        console.log("Goodbye!");
    }
}
compare(8,7);

 /******* End Your Code ********* */





 /* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/


function comp(r){
if (r<50){
    return "Fail";
}
else if(r>=50 && r<=59){
    return "E";}
else if(r>=60 && r<=69){
    return "D";}
else if(r>=70 && r<=79){
    return "C";}
else if(r>=80 && r<=89){
    return "B";}
else if(r>=90 && r<=100){
    return "A";}
};
console.log(comp(76));

// 1. Write a JS code to print numbers from 1 to 10

for(let i=1 ; i<=10 ; i++){
    console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr3 = [13,23,12,45,22,48,66,100];
let ar=[]
for(let i=0 ; i<arr3.length ; i++){
    if (arr3[i] % 2 == 0){
        ar.push(arr3[i]);
    }
};
console.log(ar);


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

for (let i = 1; i <= 8; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
};
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

let n = "don’t know why";
if (n.search("y")>0){
    console.log("Yes");
}
else{
    console.log("No");
}



/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(x,y,z,n){
    console.log(`You will be a ${x} in ${y}, and married to ${z} with ${n} kids`);
}
tellFortune("Software engineer","Jordan","Alice",3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(p){
    if(p>0){
        let y = p * 7;
        console.log(`Your doggie is ${y} years old in dog years!`);
    }
}
calculateDogAge(1);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age,amount){
    const max_age=100;
    let lose_age=max_age - age ;
    let total = lose_age * 365 * amount;
    console.log(`You will need ${total} cups of tea to last you until the ripe old age of ${max_age}`);
}
calculateSupply(30,3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
    console.log("Hello"+" "+name);
} 
greet("Adam");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

//1 : function double(cat) {
//   return 2 * cat;
// }

//2 : function double(x) {
//   return 2 * x;
// }

//3 : function double(x) {
//   return 2 * x;
// }

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

//1 : function double1(x) {
//   return 2 * x ;
// }

//2 : function double2(x) {
//   return 2 * x ;
// }

//1 : function double3(x) {
//   return 2 * x ;
// }

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(i){
    let c = i**3;
    console.log(c);
}
cube(4);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
... (293 lines left)
*/
function multiply(a,b){
    let total= a * b;
    console.log(total);
}
multiply(5,6);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
    if (age>=17 && age<20){
        let a=20-age;
        console.log(`please come back after ${a} years to get one`);
    }
    else if(age>20){
        console.log("yes you can");
    }
    return(age);
}
canIGetADrivingLicense(18);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(string1,string2){
    if (string1.length==string2.length){
        return console.log("True");;
    }
    else{
        return console.log("false");
    }
}
sameLength("ahmed","malek");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(a,b){
    if (a>b){
        return console.log(a);
    }
    else{
        return console.log(b);
    }
}
largerNubmer(5,6);
largerNubmer(5,3)

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer (a,b,c){
    var smaller=a;
    if (smaller>b){
        smaller=b;
    }
    else if (smaller>c){
        smaller=c;
    }
    console.log(smaller);
}
smallerNubmer(5,99,3);
smallerNubmer(5,3,3);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(s1,s2,s3,s4,s5){
    var smallstring=s1.length;
    if (smallstring>s2.length){
        smallstring=s2;
    }
    else if (smallstring>s3.length){
        smallstring=s3;
    }
    else if (smallstring>s4.length){
        smallstring=s4;
    }
    else if (smallstring>s5.length){
        smallstring=s5;
    }
    console.log(smallstring);
}
shorterString("air","tr","car","by","github");
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(s1,s2,s3,s4,s5){
    var longstr=s1.length;
    if (longstr<s2.length){
        longstr=s2;
    }
    else if (longstr<s3.length){
        longstr=s3;
    }
    else if (longstr<s4.length){
        longstr=s4;
    }
    else if (longstr<s5.length){
        longstr=s5;
    }
    console.log(longstr);
}
longerString("air","tr","car","by","github");

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(a){
    if (a % 2 ==0){
        console.log(`isEven (${a})`+" "+"True");
    }
    else{
        console.log(`isEven (${a})`+" "+"False");
    }
}
isEven(5);
isEven(4);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(a){
    if (a % 2 != 0){
        console.log(`isOdd (${a})`+" "+"True");
    }
    else{
        console.log(`isOdd (${a})`+" "+"False");
    }
}
isOdd(4);
isOdd(5);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(a){
    if(a>0){
        console.log("The orgin number is positive"+" "+a);
    }
    else if(a<0){
        console.log("The number is negative transform to positive"+" "+a*-1);
    }
}
positive(-5);
positive(8)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(Fname,Lname){
    console.log("Full Name : "+ " "+Fname+ " "+Lname);
}
fullName("ahmed","Yacoub")
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(arr){
    let sum = 0;
    for(let i=0; i<arr.length;i++){
         sum = sum + arr[i];
    }
    let avr = sum / arr.length;
    return avr
}
let num = [5,7,9,3,5]
console.log(average(num))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
    return console.log(Math.random());
}
randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(a,b){
    console.log(Math.random() * (b - a) + a);
}
randomBetweenNumbers(1,8);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(a){
    if (a<=100 && a>=95){
        console.log("A");
    }
    else if (a<=94 && a>=85){
        console.log("B");
    }
    else if (a<=84 && a>=70){
        console.log("C");
    }
    else if (a<=69 && a>=50){
        console.log("D");
    }
    else if (a<=49 && a>=0){
        console.log("F");
    }
    return a
}
scoreInUniversty(76);
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var x =0
function counter(){
    return ++x;
}
console.log(counter());
console.log(counter());
console.log(counter());
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

var x =0
function resetcounter(){
    if (x >= 3){
        x=0;
       
    }
    else{
        return ++x;
    }
}
console.log(resetcounter());
console.log(resetcounter());
console.log(resetcounter());

