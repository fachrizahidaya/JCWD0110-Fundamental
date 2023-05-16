// class declaration
class User1 {
  greet() {
    console.log("Hello");
  }
}
const user1 = new User1();
// user1.greet();

// class expression
const User2 = class {
  greet() {
    console.log("Hi");
  }
};
const user2 = new User2();
// user2.greet();

// constructor
class Human {
  constructor(name, birth, gender) {
    (this.name = name), (this.birth = birth), (this.gender = gender);
  }
}
const human = new Human();
let newHuman = [
  new Human("Felix", "2000-03-14", "Male"),
  new Human("Afdhal", "1998-03-14", "Male"),
  new Human("Vaya", "2001-03-14", "Female"),
];
// console.log(newHuman);

// Public, Private and Static Properties
class User {
  name;
  #email;
  static age = 21;

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  findEmail() {
    // private property dapat diakses menggunakan method yang kita buat
    return this.#email;
  }
}

const user = new User("David", "david@gmail.com"); //instance of untuk class User
console.log(user.name);
// console.log(user.#email) // tidak dapat akses secara langsung karena private property
console.log(User.age); // static tidak perlu memanggil instance of (const user)
console.log(user.findEmail());
