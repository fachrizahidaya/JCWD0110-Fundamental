class Train {
  #gerbong;
  #maxSize;
  #minSize;
  #isMinimum;
  #isFull;

  constructor() {
    this.#gerbong = ["masinis"];
    this.#maxSize = 11;
    this.#minSize = 5;
  }

  getPenumpang() {
    return this.#gerbong;
  }

  addPassenger(penumpang) {
    if (penumpang !== "masinis") {
      return this.#gerbong.push(penumpang);
    }
  }

  passengerOut(penumpang) {
    return this.gerbong.shift();
  }
}

let train = new Train();
train.addPassenger("joko", "joki");
// train.addPassenger("joki");
// train.addPassenger("joku");
console.log(train.getPenumpang());
