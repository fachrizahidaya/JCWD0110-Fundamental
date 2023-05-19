class Employee {
  constructor(salaryPerHour, overtimePerHour) {
    this.salaryPerHour = salaryPerHour;
    this.overtimePerHour = overtimePerHour;
    this.workHour = 0;
    this.normalTime = 6;
  }

  addWorkHour(n) {
    if (n <= 0) {
      console.log(`Input invalid`);
    } else {
      this.workHour += n;
    }
    console.log(this.workHour);
  }

  calculateSalary() {
    if (this.workHour <= this.normalTime) {
      console.log(this.workHour * this.salaryPerHour);
    } else {
      console.log(
        this.normalTime * this.salaryPerHour +
          (this.workHour - this.normalTime) * this.overtimePerHour
      );
    }
  }
}

class FulltimeEmployee extends Employee {
  constructor(salaryPerHour, overtimePerHour) {
    super(salaryPerHour, overtimePerHour);
  }
}

class ParttimeEmployee extends Employee {
  constructor(salaryPerHour, overtimePerHour) {
    super(salaryPerHour, overtimePerHour);
  }
}

let fulltime = new FulltimeEmployee(100000, 75000);
let parttime = new ParttimeEmployee(50000, 30000);
fulltime.addWorkHour(7);
fulltime.calculateSalary();
parttime.addWorkHour(7);
parttime.calculateSalary();
