// tidak pakai async await
const tryPromise = new Promise((resolve, reject) => {
  let isError = false;

  if (isError !== false) {
    reject("Error");
  } else {
    resolve("success");
  }
});

const noAsyncAwait = () => {
  tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));
};

asyncAwait();

// async await
const tryPromise2 = new Promise((resolve, reject) => {
  let isError = false;

  if (isError !== false) {
    reject("Error");
  } else {
    resolve("success");
  }
});

const asyncAwait = async () => {
  console.log("satu");
  await tryPromise2
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally done"));
  console.log("dua");
};

asyncAwait();

// async await dengang try-catch

const tryPromise3 = new Promise((resolve, reject) => {
  let isError = false;
  if (isError === false) {
    resolve("success");
  } else {
    reject("failed");
  }
});

const tryAndCatch = async () => {
  try {
    let result = await tryPromise3;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

tryAndCatch();
