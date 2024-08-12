// let a = {};

// a.b = {
//   c: function () {
//     this.value = 3;
//     }
// };

// a.b.c();

// console.log(a.value); // исправить задание объектов, чтобы тут вывелось 3.

let a = {};

a.b = {
  c: function () {
    this.value = 3;
  }.bind(a),
};

a.b.c();

console.log(a.value);
