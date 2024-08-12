// а) получить во втором then значение b;

// б) сделать так, чтобы console.log(а) всегда чётко выполнялся после a.

// в) дополнить первый then, чтобы из него перешла ошибка "ошибка" в catch, а из
// catch перешла за Promise дальше, поймалась и вывелась каким нибудь образом в консоль.

let a = new Promise((resolve, reject) => {
  let b = 0;
  resolve(b);
})
  .then((res) => {
    const time = new Date().getTime();
    if (time % 2 === 0) throw new Error(res);
    return res;
  })
  .then((res) => {
    return res;
  })
  .catch(() => {
    return new Promise((_, reject) => {
      reject(`Time error!`);
    });
  });

a.then((result) => console.log("a", result)).catch(console.log);
