// inheritance concept
/*
 class  dapat memberikan properties dan method nya ke class lain
*/

// cara 1
class Product {
  // parent class

  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

const product = new Product("Lord of the rings", 200000);
console.log(product);

class Book extends Product {
  // child class menginput extends dari parent class
  constructor(productName, price) {
    super(productName, price);
    this.author;
  }
  getAuthor() {
    return this.author;
  }
  setAuthor(authorName) {
    this.author = authorName;
  }
}

const book = new Book("Lord of the rings", 200000);
book.setAuthor("Tolkien");
console.log(product);
console.log(book);

// cara 2
class Product1 {
  // parent class
  productName = "Lord of the rings"
  price = 200000
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

const product1 = new Product("Lord of the rings", 200000);
console.log(product);

class Book1 extends Product1 {
  // child class menginput extends dari parent class
  constructor() {
    super();
    this.author;
  }
  getAuthor() {
    return this.author;
  }
  setAuthor(authorName) {
    this.author = authorName;
  }
}

const book1 = new Book1();
book.setAuthor("Tolkien");
console.log(product);
console.log(book);

// instanceof operator
class Animal {}
class Rabbit extends Animal {}
class Tree {}
const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
