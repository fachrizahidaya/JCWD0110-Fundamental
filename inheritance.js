// inheritance concept
/*
 class  dapat memberikan properties dan method nya ke class lain
*/
class Product {
  // parent class
  productName = "Lord of the rings";
  price = 200000;
  constructor(productName, price) {
    // this.productName = productName;
    // this.price = price;
  }
}

const product = new Product("Lord of the rings", 200000);
// console.log(product);

class Book extends Product {
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

const book = new Book();
book.setAuthor("Tolkien");
// console.log(book);

// instanceof operator
class Animal {}
class Rabbit extends Animal {}
class Tree {}
const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
