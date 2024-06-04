//Question1:
let x=250;
let y=.025;
let z =x*y;
console.log(z);

/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]
*/
//solution:
let arr=[1,7,9,45];

let arr1=["str","alex","moh",'the','fox','over','lazy','dog'];

//hint: i change the comma and single cotation in arr and arr1

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
//Solution : 

let arr2=["Apple","Watermelon","Football","Swiming","GYM","Dark","Game of thronse"]
console.log(arr2);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
//Solution : 

let arr3=[1,2,3,4,5];
let arr4=["t","u","g","x"];
console.log(arr3[0]);
console.log(arr4[0]);
/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
//Solution : 

let arr5=[1,2,3,4,5];
console.log(arr5[(arr5.length)-1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
//Solution : 

var arr7 = [0,5,7,9];
arr7.shift(0);
arr7.shift(5);
arr7.shift(7);
arr7.unshift(1,3,4,6,8);
arr7.push(10);
console.log(arr7);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
//Solution : 
var arr8 = [1,3,4,6,8,9,10];
arr8.shift(1);
arr8.shift(3);
arr8.shift(4);
arr8.shift(6);
arr8.shift(8);
arr8.pop(10);
arr8.unshift(5);
arr8.push(-7,3.5);
console.log(arr8);
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
// Declare and initialize the original array
//Solution:
var arr9 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const sort1 = arr9 => {
    let a = arr9.length;
    for(let i=0 ; i<a; i++){
        for(let n=0 ; n<a ;n++){
            if(arr9[n] > arr9[n+1]){
                let f = arr9[n];
                arr9[n] = arr9[n+1];
                arr9[n+1] = f;
            }
        }
    }
    return arr9;
};
sort1(arr9);
console.log(arr9);