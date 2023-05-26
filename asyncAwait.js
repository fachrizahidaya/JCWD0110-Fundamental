// tidak pakai async await
// const tryPromise = new Promise((resolve, reject) => {
//   let isError = false;

//   if (isError !== false) {
//     reject("Error");
//   } else {
//     resolve("success");
//   }
// });

// const asyncAwait = () => {
//   console.log("satu");
//   tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("finally done"));
//   console.log("dua");
// };

// asyncAwait();

// async await
// const tryPromise = new Promise((resolve, reject) => {
//   let isError = false;

//   if (isError !== false) {
//     reject("Error");
//   } else {
//     resolve("success");
//   }
// });

// const asyncAwait = async () => {
//   console.log("satu");
//   await tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("finally done"));
//   console.log("dua");
// };

// asyncAwait();

// async await dengang try-catch

const tryPromise2 = new Promise((resolve, reject) => {
  let isError = false;
  if (isError === false) {
    resolve("success");
  } else {
    reject("failed");
  }
});

const tryAndCatch = async () => {
  try {
    let result = await tryPromise2;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

tryAndCatch();
