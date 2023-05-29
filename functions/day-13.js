function tryPromise() {
  return new Promise((resolve, reject) => {
    let isError = false;
    if (isError !== false) {
      reject("error");
    } else {
      resolve("success");
    }
  });
}

tryPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally done"));

function tryPromise2() {
  return new Promise((resolve, reject) => {
    let isError = false;
    if (isError !== false) {
      reject("error");
    } else {
      resolve("success");
    }
  });
}

async function tryAndCatch() {
  try {
    let result = await tryPromise2();
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = { tryPromise, tryAndCatch, tryPromise2 };
