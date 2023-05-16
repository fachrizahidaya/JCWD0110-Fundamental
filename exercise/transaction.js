class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  cart = []; // properties-1

  addToCart(item, qty) {
    // method-1 --> mempunyai value item & qty yang didapat dari masukkan dari penggunaan method
    if (qty <= 0) {
      throw new Error("Ga cukup");
    } else {
      this.qty;
    }
    item.quantity = qty; // membuat properties untuk qty di dalam method add to cart
    this.cart.push(item);
  }

  getTotalTrans() {
    // method-2 --> mendapatkan total nominal belanja hasil dari looping array dengan .map()
    let total = 0;
    this.cart.map((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  totalTrans() {
    // method-3 --> membuat untuk list belanja apa saja dan totalnya
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
    // method-4 --> method dengan value uang dari User, dan untuk menampilkan uang user dan kembaliannya dari Uang User - Total Belanja = Uang kembalian
    if (moneyFromUser < this.getTotalTrans()) {
      throw new Error("Uang gacukup");
    } else {
      this.totalTrans(); // dimasukkan method totalTrans
      console.log(`your money ${moneyFromUser}`);
      console.log(`kembalian: ${moneyFromUser - this.getTotalTrans()}`);
    }
  }
}

let listProduct = [
  // input untuk class Product
  new Product("Anggur", 12000),
  new Product("Apel", 12000),
  new Product("Pisang", 12000),
  new Product("Jeruk", 12000),
];

let transaction = new Transaction(); // input untuk class Transaction
transaction.addToCart(listProduct[0], 1); // input untuk method addToCart()
transaction.addToCart(listProduct[0], 1);
transaction.checkout(50000); // input untuk method checkout()
