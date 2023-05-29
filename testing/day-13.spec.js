const { tryPromise, tryAndCatch } = require("../functions/day-13");

test("the data is success", () => {
  tryPromise().then((result) => {
    expect(result).toBe("success");
  });
});

test("should return success", async () => {
  try {
    let result = await tryAndCatch();
    expect(result).toBe("success");
  } catch (error) {
    expect(error).toBe("error");
  }
});
