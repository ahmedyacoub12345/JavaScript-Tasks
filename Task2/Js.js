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
multiply(5,6)