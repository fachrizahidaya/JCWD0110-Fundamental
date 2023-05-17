let student1 = {
  name: "Fiki",
  age: 23,
  lemari: 1,
};

let student2 = {
  name: "Fiki",
  lemari: 1,
};

const checkObject = (obj1, obj2) => {
  let keyObj1 = Object.keys(obj1);
  let valueObj1 = Object.values(obj1);
  let keyObj2 = Object.keys(obj2);
  let valueObj2 = Object.values(obj2);

  if (keyObj1.length !== keyObj2.length) {
    return "Object berbeda";
  }

  for (let i = 0; i < Math.max(keyObj1.length, keyObj2.length); i++) {
    if (!keyObj1.includes(keyObj2[i])) {
      return "Object berbeda";
    }
  }

  /* bisa menggunakan for.. loop */
  // for (let j = 0; j < Math.max(valueObj1.length, valueObj2.length); j++) {
  //   if (!valueObj1.includes(valueObj2[j])) {
  //     return "Object berbeda";
  //   }
  // }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return "Object berbeda ";
    }
  }

  return "Object sama";
};

let a = checkObject(student1, student2);
console.log(a);
