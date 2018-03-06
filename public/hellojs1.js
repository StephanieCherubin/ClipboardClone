// var my_own_var = "hellojs1";
//
// function hello1() {
// console.log(my_own_var);
// }

function scope_func() {
var my_own_var = "hellojs1";

window.hello1 = function() {
console.log(my_own_var);
};
}

scope_func();
