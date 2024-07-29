for (let index = 0; index < 5; index++) {
    
    console.count("Welcome to the matrix");
}
    
console.count("Welcome to the matrix");

//console.count () give how many time particular string is logged 


//objects 

//with constructor -> singleton 
//literal -> no singleton 

const mySym = Symbol("key1");


const user = {
    name : "Abhishek",
    age : 22,
    loacation : "Chandiagrh",
    [mySym] : "mykey1",
    email : "abhishekbhadauriya@apptunix.com",
    isLoggedin : false,
    loggedInDays : ["monday", "tuesday"],
    
}

console.log(user.loggedInDays);
console.log(user["email"]);
console.log(user[mySym]);   //you can access without giving the string 


/*
Symbol is a unique and immutable primitive value.
Symbols can be used as keys for object properties to avoid naming collisions.
Symbol.for() and Symbol.keyFor() work with the global symbol registry.
*/

user.greeting1 = function() {
    console.log(user.name);
}
user.greeting = function() {
    console.log(`Hello User : ${this.name}`);
}

user.greeting();
user.greeting1();


const tinderUser = {};   //non singleton object 
//const facebookUser = new Object();  //singleton object 
tinderUser.id = 101;
tinderUser.name = "ayushi";

console.log(tinderUser);

//nested object
const regularUser = {
    email : "koibhi@gmail.com",
    fullname : {
        userFullname : {
            firstname : "Abhishek",
            lastname : "Bhadauriya"
        }
    }
}

console.log (regularUser.fullname.userFullname.firstname);

//Option chaining 

const obj1 = {
    1 : 'a',
    2: 'b'
}
const obj2 = {
    3 : 'c',
    4 : 'd'
}

const obj3 = Object.assign({},obj1,obj2); //this is preffered 
console.log(obj3);

//Betetr way (spread operator)
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//Database values are coming as array of objects 

const DatabaseUser = [
    {
        name : "Abhi",
        email: "124@gmail.com"
    },

    {
        name : "Aditi",
        email: "1243@gmail.com"
    }
]

console.log (DatabaseUser[1].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //gives array of keys 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //return everu vpair as array 

console.log(Object.hasOwnProperty("age"));


//object JSON API (desstructuring)
 
const courses = {
    coursename : "Maths",
    coursePrice : 200,
    courseTeacher :"Gonsalves"
}

const {coursename :a, courseTeacher : c} = courses;

console.log(a,c);


//maps  (have unique values and preserves the order)
const map = new Map();
map.set("IN", "India");
map.set("USA","United stated of America");
map.set("FR", "France");

console.log(map);

for (const [key,value] of map) {
    console.log(key , " : ", value );
}

//Objects are not iterable in javascript 

const myobj = {
    cpp : "C++",
    js  : "javascript",
    swift : "swift by apple"
}

//map are not iterable 
for (const keys in myobj) {
    console.log(keys, " : ", myobj[keys]);
}

//for each loop 

const days = ["monday","tuesday","wednesday","thursday","friday","saturday" ]

//callback function does not have name 
days.forEach((item) =>  {
    console.log(item);
});

function printMe(item) {
    console.log(item);
}

days.forEach(printMe); // give only function reference do not execute it 

days.forEach((item ,index, arr) => {
    console.log(item, index, arr);
} )


//good usecase of the for each 
const mycoding = [
    {
        languageName : "Javascript",
        extension: ".js"
    },
    {
        languageName : "C++",
        extension: ".c++"
    },
    {
        languageName : "Typescript",
        extension: ".ts"
    }
] 

mycoding.forEach((item)=> {
    console.log (item);
})
