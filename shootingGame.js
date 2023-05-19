// welcome
class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  showStatus() {
    // memperlihatkan status health dan power yang dimiliki player
    console.log(
      `Player ${this.name} --> Health: ${this.health} & Power: ${this.power}`
    );
  }

  hit(power) {
    // method memberikan shooting kepada lawan yang akan mengurangi power lawan
    this.health -= power;
    console.log(`Player ${this.name} has been damaged by ${power} points`);
    console.log(`Player ${this.name} has remaining ${this.health} health`);
  }

  useItem(item) {
    // menambah health +10
    if (item.health) {
      this.health += 10;
      console.log(`Player ${this.name} received ${item.health} health points`)
    }
    // menambah power +10
    if (item.power) {
        this.power += 10;
        console.log(`Player ${this.name} received ${item.power} power points`)
    }
  }
}

class ShootingGame {
  constructor(player1, player2) {
    // super()
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    // menentukan dapat random item health atau item power atau tidak sama sekali
    let randomItem = Math.round(Math.random() * 3);
    let item = {
      health: 0,
      power: 0,
    };

    if (randomItem == 1) {
      item.health = 10;
    } else if (randomItem == 2) {
      item.power = 10;
    }
    return item;
  }

  start() {
    console.log("Game start");
    while (this.player1.health > 0 && this.player2.health > 0) {
      // loop while akan terus berjalan selama condition true/sesuai
      // Giliran Jaka jalan
      console.log(`Player ${this.player1.name} turn`);
      // menunjukkan status awal
      this.player1.showStatus();
      // mendapatkan item random
      let itemPlayer1 = this.getRandomItem();
      // menggunakan item random
      this.player1.useItem(itemPlayer1);
      // melakukan shooting kepada lawan
      this.player2.hit(this.player1.power);
      // menunjukkan status lawan
      this.player2.showStatus();
      if (this.player2.health < 0) {
        break;
      }
      // Giliran Tarub jalan
      console.log(`Player ${this.player2.name} turn`);
      // menunjukkan status awal
      this.player2.showStatus();
      // mendapatkan item random
      let itemPlayer2 = this.getRandomItem();
      // menggunakan item random
      this.player2.useItem(itemPlayer2);
      // melakukan shooting kepada lawan
      this.player1.hit(this.player2.power);
      // menunjukkan status lawan
      this.player1.showStatus();
      if (this.player1.health < 0) {
        break;
      }
    }
    if (this.player1.health > this.player2.health) {
      // while loop akan berhenti pada kondisi berikut
      console.log(`Player ${this.player1.name} is the winner`);
    } else {
      console.log(`Player ${this.player2.name} is the winner`);
    }
  }
}

// menginput data pemain
let pemain1 = new Player("Jaka");
let pemain2 = new Player("Tarub");

let game = new ShootingGame(pemain1, pemain2);
game.start();
// game.player1.showStatus();
// console.log(game.player2);
// memulai permainan
