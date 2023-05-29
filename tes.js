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
