class User {
  name;
  #code;

  constructor(codePrefix = "") {
    const randomNumber = Math.round(Math.random() * 1000);
    this.#code = `${codePrefix}${randomNumber.toString().padStart(6, "0")}`;
  }

  getCode() {
    return this.#code;
  }
}

class Student extends User {
  constructor() {
    super("STD");
  }
}

class Employee extends User {
  constructor() {
    super("EMP");
  }
}

const student = new Student();
console.log(student.getCode());
const employee = new Employee();
console.log(employee.getCode());
