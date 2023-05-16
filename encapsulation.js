// encapsulation
class Employee {
  static employeeName = "Andi";
  constructor(employeeName) {
    this.employeeName = employeeName;
  }
  getEmployeeName() {
    return this.employeeName;
  }

  setEmployeeName(newEmployeeName) {
    if (typeof newEmployeeName !== "string") {
      throw new Error("Name should a string");
    }
    this.employeeName = newEmployeeName;
  }
}
const employee = new Employee();
employee.employeeName = "Johnny";
console.log(Employee.employeeName);
// console.log(employee);
// console.log(employee.getEmployeeName())
employee.setEmployeeName("Riki");
console.log(employee);
