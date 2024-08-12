// Реализация метода Array.groupBy
// Добавить к глобальному объекту Array метод groupBy, который позволяет сгруппировать
// элементы массива по результату выполнения функции полученной в качестве аргумента.

Array.prototype.groupBy = function (groupFun) {
  const result = {};

  for (const item of this) {
    const key = groupFun ? groupFun(item) : item;
    if (!result[key]) result[key] = [];
    result[key].push(item);
  }

  return result;
};

const test1 = [1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy();
console.log("test 1: \n", test1);
// {
//   1: [1, 1, 1],
//   2: [2, 2],
//   3: [3],
//   4: [4],
//   5: [5],
//   6: [6]
// }

const test2 = [1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy(function (val) {
  return val % 3;
});
console.log("test 2: \n", test2);
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }
