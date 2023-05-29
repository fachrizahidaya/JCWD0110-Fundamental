class OrderProcess {
  constructor(data) {
    this.data = data;
  }

  process() {
    let i = 0;
    while (i < this.data.length) {
      let queuePromise = new Promise((resolve) => {
        if (this.data.length === 0) {
          throw new Error("Error cuy");
        } else {
          resolve(this.data[i]);
        }
      });
      let randomTime = Math.floor(Math.random() * 10);
      let executeQueuePromise = async () => {
        let result = await queuePromise;
        try {
          console.log(`${result} Done in ${randomTime} minutes`);
        } catch (error) {
          console.log(error);
        }
      };
      executeQueuePromise();
      i++;
    }
  }
}

let queue = new OrderProcess(["Queue 1", "Queue 2", "Queue 3"]);

queue.process();

module.exports = { OrderProcess };
