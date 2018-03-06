// console.log("I’m in a JS file!");

// var input;
// if (input === undefined){
//   console.log("It’s not defined.");
// } else {
//   console.log(input);
// }

//
// var input;
// if (input) {
//   console.log(input);
// } else {
//   console.log("It's not defined.");
// }

// var test = false;
// var output = test ? "Passed the test" : "Failed the test";
// console.log(output);

// var value = 1; //local variable
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1) {
//   console.log("one");
// } else {
//   console.log("or something else");
// }

// var x = 0;
// while (x < 10){
//   console.log(x);
//   x+=1;
// }

// var a = 60;
// while (true) {
//   console.log(a);
//   if (a >= 10) {
//     break;
//   } else {
//     a++;
//   }
// }

// for (var i = 0;
//   i <= 10;
//   i++)
//   {
//   console.log(i);
// }

// var arr = ["a", "b", "c", "d"];
//
// arr.forEach(function(item) {
//   console.log(item);
// })

// function my_func_stmt(arg) {
//   console.log("inside my function");
//   console.log(arg);
// }
//
// var my_func_exp = function(arg) {
//   console.log("inside my function");
//   console.log(arg);
// }
//
// my_func_stmt("Hola");
// my_func_exp("Hola");

// var one = function() {
//   return 1;
// }
//
// console.log(one());

// function addArgs() {
//   console.log('printing args:', arguments);
// }
//
// addArgs(1,2,3,4);

// function addArgs() {
// var sum = 0;
// for (var i = 0; i < arguments.length; i++) {
// sum += arguments[i];
// }
// return sum;
// }
//
// console.log(addArgs(3, 0.13, 0.01));


// Let’s write an switch/case statement to map state abbreviations to their full name.
// var stateAbb = "FL"
// switch (stateAbb) {
//   case "FL":
//     console.log("Florida");
//     break;
//   case "GA":
//     console.log("Georgia");
//     break;
//   case "NY":
//     console.log("New York");
//   default:
//     console.log("other");
// }

// Lets write a while loop to log numbers 5 to 10 to the browser console.
// var i = 5
// while (i<10) {

//     console.log(i);
//   i++;
//   }
//
// Lets write a for loop to log students in the class to the browser console
// based on an array of object literals.
//
// var classroom =[
//   {firstName: "Auston", lastName: "Bunsen"},
//   {firstName: "Ronnie", lastName: "Biceps"},
//   {firstName: "Stephanie", lastName: "Cherubin"},
//
// ]
//
// classrom.forEach(function(student)){
//   console.log(student.firstName);
// }
//
// Lets create a function statement to alert the value of the first argument
// (which will be an object literal) with the key “text”.
//
// var thing = {
//   text: "Boy, bye!"
// };
//
// function showAlert(mac) {
//    alert (mac["text"]);
//  }
//
// showAlert(thing)

console.log(a_var === undefined);
var a_var = 123;  //Global variable
console.log(func_var === undefined);

function a_function() {
console.log(func_var === undefined);
var func_var = "func"; //local variable
}

a_function();
