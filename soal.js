//  Train class
//     === properties ===
//     ~ gerbong => array ["masinis"]
//     ~ maxSize = 11

//     === method ===
//     ~ passengerIn(string = name, position = integer --> kalo pakai splice)
//         1. name !== "masinis"
//         2. name must be unique
//     ~ passengerOut()
//         1. masinis tidak boleh turun
//     ~ print all passengers with "masinis"

//     === requirement ===
//     ~ length = 11 (dengan masinis)

class Train {
  #gerbong = ["masinis"];
  #maxSize = 11;

  #isFull() {
    return this.#gerbong.length >= this.#maxSize;
  }

  #isMasinisLeft() {
    return this.#gerbong.length === 1;
  }

  addPassenger(name) {
    if (this.#isFull()) {
      console.log("Train overflow!");
      return;
    }
    if (this.#gerbong.includes(name)) {
      console.log(`name must be unique`);
      return;
    }
    if (name == "masinis") {
      console.log("Masinis is not passenger");
      return;
    }
    this.#gerbong.push(name);
  }

  outPassenger() {
    if (this.#isMasinisLeft()) {
      console.log("Masinis tidak boleh turun");
      return;
    }
    this.#gerbong.pop();
  }

  getPassenger() {
    console.log(this.#gerbong);
  }
}

let train = new Train();
train.addPassenger("diko");
train.addPassenger("gifari");
train.addPassenger("nur");
train.addPassenger("vaya");
train.addPassenger("gian");
train.addPassenger("fahrur");
train.addPassenger("jason");
train.addPassenger("ahmad");
train.addPassenger("amadeo");
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.outPassenger();
train.getPassenger();
