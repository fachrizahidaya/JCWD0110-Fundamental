/*
Konsep encapsulation pada Class adalah dimana kita dapat memberikan kontrol dan validasi atas properties dan value pada class
Kontrol: Untuk meng-akses dan menambahkan value kita menggunakan method
Validasi: Untuk menambahkan kondisi atas input untuk value masing-masing properties

*/
class Employee {
  employeeName = "";
  constructor(employeeName) {
    this.employeeName = employeeName;
  }

  getEmployeeName() {
    console.log(` ${this.employeeName}`);
  }

  setEmployeeName(newName) {
    if (typeof newName !== "string") {
      throw new Error("Name should a string");
    }
    this.employeeName = newName;
  }
}

let employee1 = new Employee();
employee1.setEmployeeName("Ratni");
employee1.getEmployeeName();
