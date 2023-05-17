let list1 = [
  {
    name: "Student 1",
    email: "student1@mail.com",
  },
  {
    name: "Student 2",
    email: "student2@mail.com",
  },
];

let list2 = [
  {
    name: "Student 1",
    email: "student1@mail.com",
  },
  {
    name: "Student 3",
    email: "student3@mail.com",
  },
];

const mergeArray = (arr1, arr2) => {
  let mergedArr = [...arr1];

  for (i = 0; i < arr2.length; i++) {
    let dataExist = false;
    for (j = 0; j < mergedArr.length; j++) {
      if (
        arr2[i].name === mergedArr[j].name &&
        arr2[i].email === mergedArr[j].email
      ) {
        dataExist = true;
        break;
      }
    }
    if (!dataExist) {
      mergedArr.push(arr2[i]);
    }
  }
  return mergedArr;
};

let a = mergeArray(list1, list2);
console.log(a);
