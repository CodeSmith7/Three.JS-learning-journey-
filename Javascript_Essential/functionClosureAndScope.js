//Array in javascript 

/*
on copying array in javascript it always make shallow copy 
xhallow copy : same reference point changes 
depp copy :   different referncd point 

*/

const arr1 = [1,2,4,5,6];
console.log(arr1);

const arr2 = new Array(1,2,34,5,5);
console.log(arr2);

function greet ( message) {
    console.log ("hello", message);
}


const newArray = arr1.join();// convert the arrray to the string 
console.log("new Array : ",typeof newArray);

//slice and splice in javascript 

//slice returns the section of the array without manipulating
const myn1 = arr1.slice(1,3);
console.log("slice : ", myn1);


//splice returns the section of the array and deletes that section also 
//and include last range value also 
const myn2 = arr1.splice(1,3);
console.log("splice : ",myn2);


//concat and spread 

const digit = [1,2,3,4,5,6];
const alphabet = ['a','b','c'];
//const digAlpha = digit.concat(alphabet)  //conat
const digAlpha = [...digit,...alphabet];   //spread
console.log(digAlpha);

//from make array of different things
console.log(Array.from("Abhishek"));





greet("Abhishek Bhadauriya");

                //These are called the parameters
function addTwoNumber(a,b) {
    if (typeof a == "number" && typeof b == "number") {
        console.log("Sum of ", a ," and ",b, " is ", a+b );
    } else {
        console.log("Not A Number");
    }
}

addTwoNumber(12,"a");//at time of calling is called arguments


function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter the username");
        return;
    }
    return username + " just logged in";
}

console.log(loginUserMessage()); //when no argument is passed then we got undefined


//resst and spread operator 

function calculateCartPrice(num1,num2,...num) {

    return num;
}

console.log(calculateCartPrice(100,2000,3000,4000));


//object passing in javascript
user = {
    username : "abhi",
    price : 1000
}

//we can call the function before the declaration 
getUser(user);

function getUser(anyObject) {
    console.log("Username is : ", anyObject.username);
    console.log ("Price is ", anyObject.price);
}

console.log(user);

//array passing in javascript 
const arr = [1,2,3,4,6,"abhishek","ayuhi","aditi"];

arr.forEach((index,item) => {
    console.log(index, " -> ", item);
});

console.log(arr);

//function expression 

//simple function 
let addone = (num) => {
    return num + 1;
}

console.log (addone(10));

//Arrow function 
let addtwo = function(num) {
    return num + 2;
}

console.log (addtwo(20));


/*
function declaraion using the function keyword is hoisted i.e
we can call the function before the declaration.
but,
Function exppression are ot hoisted i.e. you cannot call the
function before declaration.
*/



//loging the variable in the same line use ` this 
function greet(name) {
    return `hello, ${name}`;
}

console.log(greet('Abhishek')); // Hello, Abhishek!

//different type of the function 

//this and arrow function 
//this -> refers to the current context 


const user1 = {
    username : "Abhishek",
    price : 10000,
    welcomeText : function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

user1.welcomeText();
user1.username = "Aditi"
user1.welcomeText();


console.log(this);  //in node environment it gives empty 
//but in browser it give its global object that is the Window Object 


//arrow function in javascript 
const start =  () => {
    let username = "Abhi";
    console.log(`${username} started`);
}

start()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }


//Implicit return of the same function (not necessary to write the return keyword)
const addTwo = (num1,num2) => num1+num2;


console.log(addTwo(12,3));


//Immediately Invoked Function Expression (IIFE)
// ()()  first is for function definition second is execition call 
//due to problem arises due to global scope pollution 
(function aisehi () {
    console.log("DB connected");
}) (); //this semicolon is neccessary (don't know where to end the context )


( (name)=> {
    console.log("Arrow iife", name);
})("abhi");

