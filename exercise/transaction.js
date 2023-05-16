class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  cart = [];
  addToCart(item, qty) {
    if (qty <= 0) {
      throw new Error("Ga cukup");
    } else {
      this.qty;
    }
    item.quantity = qty;
    console.log(qty);
    this.cart.push(item);
  }

  getTotalTrans() {
    let total = 0;
    this.cart.map((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  totalTrans() {
    this.cart.map((item, index) => {
      console.log(
        `${index + 1}. ${item.name} x ${item.quantity} = ${item.quantity} * ${
          item.price
        }`
      );
    });
    console.log(`Total: ${this.getTotalTrans()}`);
  }

  checkout(moneyFromUser) {
    if (moneyFromUser < this.getTotalTrans()) {
      throw new Error("Uang gacukup");
    } else {
      this.totalTrans();
      console.log(`your money ${moneyFromUser}`);
      console.log(`kembalian: ${moneyFromUser - this.getTotalTrans()}`);
    }
  }
}

let listProduct = [
  new Product("Anggur", 12000),
  new Product("Apel", 12000),
  new Product("Pisang", 12000),
  new Product("Jeruk", 12000),
];

let transaction = new Transaction();
transaction.addToCart(listProduct[0], 1);
transaction.addToCart(listProduct[0], 1);
transaction.checkout(50000);
