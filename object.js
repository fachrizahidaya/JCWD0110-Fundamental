// Cara 1
let student = {
  name: "Abdi",
  age: 25,
  batchClass: "JCWD0110",
  greet() {
    return "Hello";
  },
  detailAddress: {
    cluster: "flora",
    RT: 4,
    RW: 23,
  },
  lemari: [1, 2, 3],
};
// console.log(JSON.stringify(student));
// console.log(student);
// console.log(student.name);
// console.log(student["age"]);
// console.log(student.greet());
// console.log(student.detailAddress.cluster);
// console.log(student["detailAddress"].RW);
// console.log(student.lemari[1]);

// Add properties to object
student.birthday = "1990-02-16";
// student[2] = 23;
// console.log(student);

// Delete properties of object
delete student.lemari;
// console.log(student);

// optional chaining
// console.log(student.lemari?.lokasi);

// object destructuring --> memecah data object menjadi variable
let { name, age, batchClass } = student;
// console.log(name);
name = "Riza";
// console.log(name);
// console.log(student);

// destructuring pada array
let a1 = [1, 2, "yes", true];
// console.log(a1);
let [c, d, e, f] = a1;
// console.log(e);
// let a3, b3;
// [a3, b3] = [10, 20];
// console.log(a3);

// Cara 2
let user = new Object();
user.name = "Rizki";
// user[1] = 20;
// console.log(user);

// Access value dari object
let objValue = Object.values(student);
// console.log(objValue);
// Access key dari object
let objKeys = Object.keys(student);
// console.log(objKeys);

// for-in loop
// Looping object --> validasi properties apa saja yang dimiliki
for (let item in student) {
  //   console.log(item);
  //   console.log(student[item]);
}

// getter and setter
let user1 = {
  firstName: "John",
  lastName: "Smith",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const splittedValues = value.split(" ");
    this.firstName = splittedValues[0];
    this.lastName = splittedValues[1];
  },
};
// console.log(user1);
// console.log("Before:", user1.fullName);
user1.fullName = "Alice Cooper";
// console.log("After:", user1.fullName);

// user.fullName = "Alice Cooper";

// console.log(user.firstName);
// console.log(user.lastName);

// spread operator
// array
const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const dataThree = [7, 8, 9];
const finalData = [...dataOne, ...dataTwo, ...dataThree];
console.log(finalData);

// object
const objOne = {
  name: "Riza",
  age: 25,
};
const objTwo = {
  email: "riza@gmail.com",
  address: "Bekasi",
};

const finalObj = { ...objOne, ...objTwo };
console.log(finalObj);
console.log(finalObj.name);
