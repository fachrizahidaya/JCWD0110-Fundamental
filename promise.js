const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  console.log("waiting...");
  if (isError !== false) {
    setTimeout(() => {
      reject("Error");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("success");
    }, 2000);
  }
  //   console.log("done...");
});

tryPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally done"));

//   contoh lain
let database = [1, 2, 3, 4, 5];
let newPromise = new Promise((resolve, reject) => {
  if (!database || database.length === 0) {
    reject("Array kosong");
  } else {
    setTimeout(() => {
      database.pop();

      resolve(database);
    }, 3000);
  }
});

newPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Proses selesai"));
