class User {
  name = "";

  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let user1 = new User("Rika");
console.log(user1.name);
// let user2 = new User();
// user1.addName("Rika")
