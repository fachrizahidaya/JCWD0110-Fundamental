let arrStudents = [
  {
    name: "Fiki",
    email: "fiki@gmail.com",
    age: 21,
    score: 90,
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    age: 23,
    score: 80,
  },
];

const findLowHighAverage = (arr) => {
  let ageAll = [];
  let scoreAll = [];

  for (let i = 0; i < arr.length; i++) {
    ageAll.push(arr[i].age);
  }

  for (let j = 0; j < arr.length; j++) {
    scoreAll.push(arr[j].score);
  }

  let minAge = Math.min(...ageAll);
  let maxAge = Math.max(...ageAll);
  let minScore = Math.min(...scoreAll);
  let maxScore = Math.max(...scoreAll);
  let avgAge = ageAll.reduce((a, b) => a + b) / arr.length;
  let avgScore = scoreAll.reduce((x, y) => x + y) / arr.length;

  let obj = {
    age: {
      highest: maxAge,
      lowest: minAge,
      average: avgAge,
    },
    score: {
      highest: maxScore,
      lowest: minScore,
      average: avgScore,
    },
  };
  return obj;
};

let b = findLowHighAverage(arrStudents);
console.log(b);
