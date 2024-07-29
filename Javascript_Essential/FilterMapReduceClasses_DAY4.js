//filter, map and reduce

const days = ["monday","tuesday","wednesday","thursday","friday","saturday" ]

const a = days.forEach((item) => {
    console.log ( item );
})

console.log (a);

const mynums = [1,2,3,4,5,6,7,8,9,10];

//filter can return the values 
const ans = mynums.filter((item) => item > 4);
const ans1 = mynums.filter((item) => {
    return item < 4;
} );

console.log(ans);
console.log(ans1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//const userBooks = books.filter((item) => item.genre === "History");

const userBooks = books.filter((item) => item.edition > 2000 && item.genre === "Science");

console.log(userBooks);


const numMap = mynums.map ((item ) =>  item *2)
console.log(numMap);


//chaining -> use two three methods directly 
const numChaining = mynums
                    .map((item) => item * 10 )
                    .map((item) => item + 1)
                    .filter((item) => item > 50 )


console.log(numChaining)



//Reduce 
const nums = [1,2,3];

// const myTotal = nums.reduce( function (acc, currval) {
//     console.log(acc, "   ", currval);
//     return acc + currval
// }, 10);


const myTotal = nums.reduce( (acc,curval) => acc + curval, 10);


console.log("Reduce answer is : ", myTotal);


//shopping cart price calculation using reduce 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc,currVal) => acc + currVal.price,0);
console.log("Price of the cart is : ", priceToPay);




//Prototype in javascript 


// function Person(name,job,yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;

// }

// Person.prototype.show = function show() {
//     console.log("name : ", this.name);
//     console.log("job : ", this.job);
//     console.log("Birth year : ", this.yearOfBirth);
// } 

// let person1 = new Person("ABHISHEK", "SDE", 2002)

// console.log(person1.prototype);

// console.log(person1.show());




//classes

class Person {
    name;
  
    constructor(name) {
      console.log(("I am inside the contructor"));
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
}


const p = new Person("abhi");
p.introduceSelf();




// OBJECT ORIENTED PROGRAMMING 

/*
Javascript is primarily a prototype based language
all other things are syntatic sugar on this 
underthe hood it uses the prototype

Object Literal
COnstructor function  
prototypes
classes
Instances (new, this)


*/


//constructor function