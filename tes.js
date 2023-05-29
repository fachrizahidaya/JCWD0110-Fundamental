const findFunc = (a) => {
  return {
    findOne() {
      return {
        findTwo() {
          return {
            findThree() {
              return {
                array: [
                  {
                    b: "test",
                    c: "value",
                  },
                  {
                    5: a,
                  },
                ],
              };
            },
          };
        },
      };
    },
  };
};

// 5
console.log(findFunc(5).findOne().findTwo().findThree().array[1]);
