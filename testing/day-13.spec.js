const { tryPromise, tryAndCatch, tryPromise2 } = require("../functions/day-13");

test("the data is success", () => {
  return tryPromise().then((result) => {
    expect(result).toBe("success");
  });
});

// test("should return success", async () => {
//   try {
//     let result = await tryPromise2();
//     expect(result).toBe("success");
//   } catch (error) {
//     expect(error).toBe("error");
//   }
// });
