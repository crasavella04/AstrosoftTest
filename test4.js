// function myFunction(){
// }

// var A = myFunction();
// var B = new myFunction();

// console.log(A === B);

// Сделать, чтобы console.log(A === B) вывел true.

function myFunction() {
  return myFunction;
}

var A = myFunction();
var B = new myFunction();

console.log(A === B);
