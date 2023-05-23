class Queue {
  #container = [];
  #maxSize;

  constructor(maxSize = 3) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  getElements() {
    return this.#container;
  }

  enqueue(element) {
    if (this.#isFull()) {
      console.log("Queue overflow");
      return;
    }
    this.#container.push(element);
  }

  dequeue() {
    if (this.#isEmpty()) {
      console.log("Queue underflow");
      return;
    }
    this.#container.shift();
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.getElements()
// queue.enqueue(4)
// console.log(queue);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue.getElements());
