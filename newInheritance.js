/*
Konsep inheritance adalah dimana suatu class dapat menurunkan properties dan method nya ke class lain
Parent class : class yang menurunkan
Child class : class yang mendapat turunan

Keyword yang digunakan adalah extends pada pembuatan child class --> Class (child class) extends (parent class)
Menambahkan keyword super() pada constructor() di class child
*/

class Product {
  productName = "";
  price = 0;

  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

class Book extends Product {
  constructor(productName, price, author) {
    super(productName, price);
    this.author = author;
  }

  getAuthor() {
    console.log(`${this.author}`);
  }

  setAuthor(authorName) {
    this.author = authorName;
  }
}
let product = new Product();

let book = new Book("Lord of the rings", 100000);
book.setAuthor("Tolkien");
book.getAuthor();
console.log(book.productName);
