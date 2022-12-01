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
