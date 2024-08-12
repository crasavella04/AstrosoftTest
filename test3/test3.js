// function fireAlert (){
//   alert("alert!");
// };

// fireAlert.delay(300); // реализовать наполнение метода, чтобы через 300мс вылетел "alert!"

Function.prototype.delay = function (ms) {
  setTimeout(this, ms);
};

function fireAlert() {
  alert("alert!");
}

fireAlert.delay(300);
