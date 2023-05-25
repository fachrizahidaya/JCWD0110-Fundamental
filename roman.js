const romanConverter = (str) => {
  let romanCharacter = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let res = 0;
  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    let next = str[i + 1];

    if (romanCharacter[current] < romanCharacter[next]) {
      res -= romanCharacter[current];
    } else {
      res += romanCharacter[current];
    }
  }
  return res;
};

let a = "MCMXCIV";
console.log(romanConverter(a));
