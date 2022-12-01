// Printing something into the browse console :
console.log("I like something !");
console.log("It's really good !");


// Print alert on the page :

/*

window.alert("Some alert !")

*/


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


// Type conversion :

/*

let age_1 = window.prompt("How old are you ?");

console.log(typeof age_1);

age_1 = Number(age_1);
age_1 += 1;

console.log(typeof age_1);

console.log("Happy Birthday ! You are", age_1, " years old");

*/


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
