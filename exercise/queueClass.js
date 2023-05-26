class OrderProcess {
  constructor(data) {
    this.data = data;
  }

  processing() {
    let i = 0;
    while (i < this.data.length) {
      let promiseQueue = new Promise((resolve, reject) => {
        resolve(this.data[i]);
        reject("failed");
      });
      let randomInterval = Math.ceil(Math.random() * 10);
      let executePromise = async () => {
        try {
          let result = await promiseQueue;
          console.log(`${result} Done in ${randomInterval} minutes`);
        } catch (error) {
          console.log(error);
        }
      };
      executePromise();
      i++;
    }
  }
}

module.exports = { OrderProcess };
