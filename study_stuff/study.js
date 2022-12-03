// Printing something into the browse console :
console.log("I like something !");
console.log("It's really good !");

// Print alert on the page :

/*

window.alert("Some alert !")

*/

// ------------------------------------------------------------------------------------------------- //

// Variables :
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps :
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Max";
let age = 20;
let student = true;

age += 1;

console.log(firstName);
console.log(age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled : " + student;

// ------------------------------------------------------------------------------------------------- //

// Arithmetic expressions :

/*

operands (values, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
eg. : y = x + 5

*/

let students = 20;


// User input :

/*

let username = window.prompt("What's your name ?");
console.log(username);

*/

// Using HTML way :

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}

// ------------------------------------------------------------------------------------------------- //

// Type conversion :

/*

let age_1 = window.prompt("How old are you ?");

console.log(typeof age_1);

age_1 = Number(age_1);
age_1 += 1;

console.log(typeof age_1);

console.log("Happy Birthday ! You are", age_1, " years old");

*/

// ------------------------------------------------------------------------------------------------- //

// const = a variable that can't be changed :

/*

const PI = 3.14159
let radius;
let circumference;


radius = window.prompt("Enter a radius of a circle : ")
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is : ", circumference);

*/

// ------------------------------------------------------------------------------------------------- //

// Useful string properties and methods :

let username_1 = "Some text";
let phoneNumber = "123-456-7890";

console.log(username_1.length);
console.log(username_1.charAt(0));
console.log(username_1.indexOf("t"));
console.log(username_1.lastIndexOf("t"));
console.log(username_1.toUpperCase());

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// ------------------------------------------------------------------------------------------------- //

// slice() method - extracts a section of a string and returns it as a new string,
// without modifying the original string.

let fullName = "firstName lastName";
let firstName_1;
let lastName_2;

firstName_1 = fullName.slice(0, 9);
lastName_2 = fullName.slice(10);

console.log(firstName_1);
console.log(lastName_2);

// ------------------------------------------------------------------------------------------------- //

// method chaining - calling one method after another in one continuous line of code.

let userName_2 = "maks"

let letter = userName_2.charAt(0).toUpperCase(); 

console.log(letter);

// ------------------------------------------------------------------------------------------------- //

document.getElementById("myButtonCheckBox").onclick = function(){
    if(document.getElementById("myCheckBox").checked){
        console.log("You are subscribed !");
    }
    else{
        console.log("You are not subscribed !");
    }
}

// ------------------------------------------------------------------------------------------------- //

// switch() {...} - statement that examines a value for a match against many cases clauses.
// More efficient that many "else if" statement.

let grade = ".";

switch(grade){
    case "A":
        console.log("You did great !");
        break;
    case "B":
        console.log("You did good !");
        break;
    case "C":
        console.log("You did okay !");
        break;
    case "D":
        console.log("You passed.");
        break;
    case "F":
        console.log("You FAILED !");
        break;
    default:
        console.log(grade, " is not a letter grade !");
}

// ------------------------------------------------------------------------------------------------- //

// Loops :

// for, while and do while :
// example with while only :

/*

let userName_3 = "";

while(userName_3 == ""){
    userName_3 = window.prompt("Enter your name : ");
}

console.log("Hello", userName_3);

*/

// ------------------------------------------------------------------------------------------------- //

// function = Define code once, and use it many times.
// To perform some code, call the function name.

function happyBirthday(){
    console.log("Happy birthday to you !");
}

function factorial(number){
    if (number == 0 || number == 1){
        return 1;
    }
    return number * factorial(number - 1)
}

console.log(factorial(5));

// ------------------------------------------------------------------------------------------------- //

// variavle scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}
// global variable = is declared outside any function

// ------------------------------------------------------------------------------------------------- //

// array - think of it as a variable that can store multiple values.

let fruits = ["apple", "orange", "banana"];

fruits.push("lemon");
fruits.pop();

fruits = fruits.sort()

for(let fruit of fruits){
    console.log(fruit);
}

// ------------------------------------------------------------------------------------------------- //

// spread operator = allows an iterable such as an array or string to be expanded in places
// where zero or more arguments are expected (unpacks the elements).
// ... upacks the elements

let userName_4 = "maksym";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(...userName_4);
console.log(...numbers);
console.log(Math.max(...numbers));

// ------------------------------------------------------------------------------------------------- //

// rest parameters = represents an indefinite number of parameters (packs arguments into an array).

let a = 1;
let b = 10;
let c = 100;

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(a, b, c));

// ------------------------------------------------------------------------------------------------- //

// array.forEach() = executes a provided callback function once for each array element.

let students_1 = ["student1", "student2", "student3"];
students_1.forEach(capitalize);
students_1.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

// ------------------------------------------------------------------------------------------------- //

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort)

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}

// ------------------------------------------------------------------------------------------------- //

// function expression = function without a name (anonymous function) avoid
// polluting the global scope with names. Write it, then forget about it.

const greeting = function(){
    console.log("Hello");
}

greeting();

// ------------------------------------------------------------------------------------------------- //

// arrow function = compact alternative to a traditional function expression ( => )

const greeting_1 = (userName) => console.log(`Hello ${userName}`);

greeting_1("Maks");

// ------------------------------------------------------------------------------------------------- //

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

console.log(cards);

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

// ------------------------------------------------------------------------------------------------- //

// object = A group of properties and methods | properties = what an object has
// | methods = what an object can do use . to access properties / methods.

const car = {

    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log("You drive the car");
    },

    brake : function(){
        console.log("You step on the brakes");
    },

}

console.log(car.model, car.color, car.year);

// ------------------------------------------------------------------------------------------------- //

// class - a blueprint for creating objects define what properties and methods they have
// use a constructor for unique properties.

class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();

player1.score += 1;

console.log(player1.score);

player1.pause();

// ------------------------------------------------------------------------------------------------- //

// constructor = a special method of a class, accepts arguments and assigns properties.

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const studentTech = new Student("Maks", 20, 5);

console.log(studentTech.name, studentTech.age, studentTech.gpa);
studentTech.study();

// ------------------------------------------------------------------------------------------------- //

// inheritance = a child class can inherit all the methods and properties from another class.

// ------------------------------------------------------------------------------------------------- //

// super = refers to the parent class.
// Commonly used to invoke constructor of a parent class.

// ------------------------------------------------------------------------------------------------- //

// array of objects :

class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model} car.`);
    }
}

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

const car1 = new Car("Mustang", 2022, "red");
const car2 = new Car("Corvette", 2023, "blue");
const car3 = new Car("Lambo", 2024, "yellow");

const cars = [car1, car2, car3];

startRace(cars);

// ------------------------------------------------------------------------------------------------- //
