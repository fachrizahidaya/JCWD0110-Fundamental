const tryThrow = () => {
  try {
    let isFalse = true;
    if (isFalse) {
      throw new Error("an error");
    //   throw "An error"
    }
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

tryThrow();
