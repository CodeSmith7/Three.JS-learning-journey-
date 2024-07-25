// console.log ("this is abhishek bhadauriya");

// var a = "Abhishek";
// var b = "Bhadauriya";
// console.log ("a = " ,a, "b = ", b);

// //placeholders 
// let c = "matrix";
// console.log ("welcome %s to this world of %s",a,c);
// //console.log(document.body);

//var let and cosnt 

/*
var is not used much due block and functional scope
*/
const accountID = 2345;
let accountMail = "abhishek123@gmail.com";
var accountPassword = "12345";
accountCity = "Agra";
let accountState;

//let accountMail;         //this gives error as you cannot declare the same let variable in same scope 
var accountPassword;       // but we can declare the var 

//accountID = 34;
console.log(accountID);
accountMail = "abhi@98";
accountPassword = "3456";
accountCity = "Kanpur";

console.table([accountID,accountMail,accountPassword,accountCity,accountState]);


//Data Tyeps 
/* PRIMITIVE DATA TYPE
number 
bigint
string
boolean 
null 
undefined
symbol ->  uniqueness
*/

/* NON PRIMITIVE DATATYPE
object 

*/

//undefined is the type but null is an object 


console.log("null value is -> " , typeof null);

//conversion and operations 
let score = "212one";    
let scoreNum = Number(score);
console.log(typeof scoreNum);
console.log(scoreNum);         //gives NaN if score = "12fnf"


//Operations 
console.log(2**3);

console.log ("1" + 4);
console.log (1 + "4");
console.log ("1" + 4 + 4);
console.log (1+4+"4");

let counter = 100;
counter++;
++counter;
console.log(counter);

//comparison operator 
console.log (null < 0);
console.log (null == 0);
console.log (null >= 0);


//strict check (===)
console.log("strict check");
console.log("2" == 2); //true 
console.log("2" === 2); // false check type also 




//Control Flow 

//if-else 
const isUserLogin = true;

if (!isUserLogin) {
    console.log("user logged in");
} else {
    console.log("Not logged in");
}

//if -else ladder 
const balance = 5000;
if (balance < 2000) {
    console.log("Balance less than 2000");
} else if (balance < 3000) {
    console.log("Balance less than 3000");
} else if (balance < 6000) {
    console.log("Balance less than 5000");
} else {
    console.log("Sufficient Balance");
}

//block scope 
score = 200;
if (score > 100) {
    var power = "combat";
    console.log('user power :' ,power);
}
console.log('user power :' ,power); //not giving any error 


//short hand notation (ternary operator)

let message = balance < 2500 ? "Low Balance" : "Sufficient Balance ";
console.log(message);



//Switch Case 
console.log("**************Switch Case*************");

const month = 3;
switch (month) {
    case 1: 
        console.log("JANUARY");
        break;
    case 2: 
        console.log("FEBRUARY");
        break;
    case 3: 
        console.log("MAY");
        break;
    case 4: 
        console.log("APRIL");
        break;
    case 5: 
        console.log("MAY");
        break;
    case 6: 
        console.log("JUNE");
        break;
    case 3: 
        console.log("JULY");
        break;
    case 8: 
        console.log("AUGUST");
        break;
    case 9: 
        console.log("SEPTEMBER");
        break;
    case 10: 
        console.log("OCTOBER");
        break;
    case 11: 
        console.log("NOVEMBER");
        break;
    case 12: 
        console.log("DECEMBER");
        break;

    default:
        console.log("INVALID MONTH");
}


//truthy and falsy values 

//falsy value
  //false , 0, -0, BigInt, 0n, "",  null, undefined, Nan
 
//truthy values 
  // "0", "false", " ", [], {}, function(){}

//checking array id empty or not
const a = [];
if (a.length === 0) {
    console.log("Array is empty");
}

//checking object is empty or not 
const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is Empty");
}


//Nullish Coalescing Operator (??):  null undefined
let val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 20;
console.log(val1);


//Iteration statement 
for (let index = 0; index < 20; index++) {
    console.log(index);
}

//nested for loop 
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        console.log("*");
    }
}


//while loop 
let i = 0;
while (i < 5) {
  // code to be executed as long as condition is true
  i++;
}
console.log("while loop i ", i);

//do while 
console.log("Do while loop");
do {
    console.log(i);
    i++;
} while (i < 10);


// for....in loop logs each key-value pair
const obj1 = { a: 1, b: 2, c: 3 };
for (let key in obj1) {
  console.log(key, obj1[key]); 
}

// for...of loop logs each value in the array
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value); 
}


//function 
function greet(name) {
    return "Hello, " + name;
}


console.log(greet("Abhishek"));





