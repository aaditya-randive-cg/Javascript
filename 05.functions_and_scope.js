/*
//1. Conceptual Understanding
//A function in JavaScript is a reusable block of code designed to perform a specific task. It executes when it is called.
//Four Advantages of Using Functions
//1. Code Reusability: A function can be used multiple times without writing the same code again.
//2. Reduces Code Duplication: Functions avoid repeating the same code in different parts of a program.
//3. Easy Debugging: Functions make it easier to identify and fix errors in a program.
//4. Improves Readability: Functions divide a large program into smaller, manageable blocks, making the code easier to understand.

//2. Function Declaration
function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}
console.log(greetStudent("Rahul"));
console.log(greetStudent("Priya"));

// 3. Hoisting
// Hoisting is a JavaScript behavior in which function declarations can be called before they appear in the code
greet(); // Function called before its definition
function greet() {
    console.log("Hello, Student!");
}
// First, we call greet() before writing its definition.JavaScript processes the function declaration so that the function can be called before its position in the code.Therefore, the function executes successfully and prints "Hello, Student!"
// Function declarations are hoisted, meaning JavaScript makes the function available before executing the code line by line.

//4
let calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
}
console.log(calculateAverage(80,90,70))

//5
function multiply(x, y) {  // x and y are parameters
    return x * y;
}
console.log(multiply(12, 5)); // 12 and 5 are arguments

//6
function isEven(number){
    return number%2==0
}
console.log(24)
console.log(17)

//7
function findPercentage(obtainedMarks,totalMarks){
    return (obtainedMarks/totalMarks)*100
}
console.log(findPercentage(456,500))

//8
function greet() {
    console.log("Hello, Student!");
}
let result = greet();
console.log(result);

//9
function calculateSimpleInterest(principal,rate,time){
    return SI = (principal * rate * time) / 100
}
console.log(calculateSimpleInterest(1000,5,2))

//10
//a
//Function Declaration: Can be called before it is defined because it is hoisted.
//Function Expression: Cannot be called before it is initialized when declared using const or let.
// Function declaration
greet();
function greet() {
    console.log("Hello!");
}
// Function expression
const sayHello = function() {
    console.log("Hi!");
};
sayHello();

//b
function student_data(name,marks){
    return `Student ${name} has scored ${marks} marks.`
}
console.log(student_data("praveen",90))
console.log(student_data("sheetal",90))
//question11
let course="Javascript"
function displayAge(){
    let age=20
    return(age)
}
function code(){
    return(course)
}

console.log(displayAge())
console.log(code())


let course="Javascript"
function displayAge(){
    let age=20
    return(age)
}
function code(){
    return(course)
}

console.log(displayAge())
console.log(code())


//question12
function analyzeStudent(name,m1,m2,m3){
    let totalMarks=m1+m2+m3
    let avg=totalMarks/3
    return console.log(`${name}scrored total ${totalMarks}with average ${avg}`)
}
console.log(analyzeStudent("1",40,40,30))



//question13













//question14
function generateReport(name,m1,m2,m3){
    let totalmarks=m1+m2+m3
    let average=totalmarks/3
    let result;
    if(average>40){
        result="pass"
    }
    else{
        result="fail"
}
return console.log(`${name} total mark ${totalmarks} average ${average} result ${result}`)
}

console.log(generateReport("a",70,70,70))


//question15
function sumThree(a,b,c){
    return a+b+c
}

function averageOfThree(a,b,c){
    let tot=a+b+c
    let ave=tot/3
    return ave
}

function maxOfTwo(x,y){
    if(x>y){
        console.log("x is larger")
    }
    else if(x<y){
        console.log("y is larger")
    }
    else if(x==y){
        console.log("equle")
    }
}

function fullName(first,last){
    let fullName=first+last
    return fullName
}

console.log(sumThree(1,2,3))
console.log(averageOfThree(1,2,3))
console.log(maxOfTwo(7,7))
console.log(fullName("1","2"))
//question16
function CalculateFinalPrice(Price,discountPercent){
    let final=Price-(Price*discountPercent)/100
    return final
}
console.log(CalculateFinalPrice(12000,10))
//question18
function celsiusToFahrenheit(c){
    let F=(c*9/5)+32
    return F
}
console.log(celsiusToFahrenheit(10))

function fahreitToCelsius(f){
    let c=(f-32)*5/9
    return c
}
console.log(fahreitToCelsius(7))

//question20
function processStudent(name,m1,m2,m3){
    let tot=m1+m2+m3
    let avg=tot/3
    let  re;
    if(re>40){
        re="Pass"
    }
    else{
        re="Fail"
}
return (`${tot} average ${avg} result ${re} `)
}
console.log(processStudent("1",7,7,7))
*/