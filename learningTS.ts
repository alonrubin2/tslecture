



// // basic types
// // if we define a variable with a specific type, TS will throw an error
// // if we try to assign it a different type
// let phone: number = 5;
// let name: string = 'alon';
// const published: boolean = true;
// let x: any = "Hello";
// x = true;

// let age: number;

// age = 30;

// let ids: number[] = [1, 2, 3, 4, 5];
// let arr: any[] = [1, true, 'alon'];

// // Tuple
// // tuples are arrays where the different types of members are
// // defined when the array is initialized
// let person: [number, string, boolean] = [1, 'alon', false];
// // the first members of array person MUST be a number,
// // the second MUST be a string and the third MUST be a boolean

// // Tuple array - array of tuples
// let employee: [number, string][];

// employee = [
//     [1, "Alon"],
//     [2, "Meri"],
//     [3, "Lotan"]
// ]
// // this way employee will always be an array containing arrays that are set to accept
// // a number at [0] and a string at [1]

// // Union
// // if a variable might be one of 2 options, we can use a union
// // a good example is IDs - these might be numbers, and might be strings
// // to mark that, we use this syntax:
// let id: string | number = 22;

// id = '22';
// id = 22;


// // Enum
// // the first value of an eNum will always initialized as 0, and the following members will have
// // increamanting values. if we give the first one a different numerical value, the others will
// // still increment from it.
// enum direction1 {
//     up,
//     down = 10,
//     left,
//     right
// }

// console.log(direction1.up); // 0
// console.log(direction1.left); // 11


// // string value enums
// enum direction2 {
//     up = "Up",
//     down = "Down",
//     left = "Left",
//     right = "Right"
// }
// console.log(direction2.left) // "left"


// // Objects
// // this way defines a new Type in TS, gives it a shpae, and then it can be used
// type User = {
//     id: number,
//     name: string
// }

// const user: User = {
//     id: 1, //if i try to give id any value that is not a number, it will throw an error
//     name: 'Alon'
// }

// // Type assertion
// // a way of asserting any type on a variable after initialization

// let cid: any = 1; // cid can not be any type, but is currently 1

// // let customerId = <number>cid; // use the value of cid, but only as a number
// // customerId = "heeeeeey" // throws error

// let customrId = cid as number;
// // these are the 2 ways to write type assertion


// // types in functions
// // the function expects 2 numbers as arguments, and is also expected to return a number
// function addNum(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(addNum(1, 1)); // 2
// // console.log(addNum(1, "1")); // throws error due to string in place of expected number


// function log(messege: string | number): void {
//     console.log(messege);
// }

// log('heyyy');
// log(11244);
// // log(true); // throws error


// // Interface
// // a Custom type or shape for a specific object or function
// // this is kinda similar to classes or types

// interface UserInterface {
//     readonly id: number, // "readonly" makes this value imutable
//     name: string,
//     age?: number // if we want a poroperty to be optional, the "?" makes it so
//     //otherwise, the object user1 would now throw an error because it is missing a poroperty
// }

// const user1: UserInterface = {
//     id: 32,
//     name: "meri"
// }

// // the main difference between a Type and an Interface is that Interfaces can't hadnlt unions
// // whereas types can.
// // for me this mainly means that I should use types more than interfaces

// // user1.id = 5; //throws error because id is readonly


// interface MathFunc {
//     (x: number, y: number): number
// }
// // this is very unclear to me - i've declared the shape of the function, why am i doing it again?
// const add: MathFunc = (x: number, y: number): number => x + y;
// const sub: MathFunc = (x: number, y: number): number => x - y;
// // i don't understand what this is good for


// // Classes

// interface PersonInterface {
//     id: number,
//     name: string,
//     age?: number
//     register(): string // this means that the function register() always returns a string

// }

// class Person implements PersonInterface {
//     id: number // private  means that the property can only be accessed from the class - was there
//     name: string // protected means that name can only be accessed from this class or any extending class - was there

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }

//     register() {
//         return `${this.name} is now registered`;
//         // return 1 // will throw an error - not a string
//     }
// }

// const alon = new Person(1, 'alon')
// const ella = new Person(2, "Ella")

// console.log(alon, ella)

// alon.id = 5 // throws error due to private
// console.log(alon.id) // same
// console.log(alon.name) // same but due to protected


// console.log(alon, ella)

// console.log(alon.register());

// // class extention - sub classes
// class Employee extends Person {
//     position: string

//     constructor(id: number, name: string, position: string) {
//         super(id, name);
//         this.position = position;
//     }
// }


// const emp = new Employee(3, "Lotan", "developer");

// console.log(emp);
// console.log(emp.register());



// // Generics

// // used to build reusable components
// // the <T> is used as a place holder that can be later filled with whichever type we want to use
// // this can help with creating functions and components that are generic and can be manipulated
// // for many different uses
// function getArray<T>(items: T[]): T[] { //the <T> is used as a place holder
//     return new Array().concat(items);
// }

// let numArray = getArray<number>([1, 2, 3, 4]); // with this syntax, the array can only recive numbers
// let strArray = getArray<string>(["alon", "ella", "meri", "lotan"]); // with this syntax, the array can only recive strings

// console.log(numArray);
// console.log(strArray);
// // numArray.push('fifty'); // no error, array can contain any type
// console.log(numArray);




