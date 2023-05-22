class Stack {
  #maxSize;
  #container = [];

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

  push(element) {
    if (this.#isFull()) {
      console.log("Stack overflow");
      return;
    }
    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack underflow");
      return;
    }
    this.#container.pop();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.push(8);
// stack.push(9);
// stack.push(10);
// stack.push(11);
console.log(stack.getElements());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
// console.log(stack.getElements());
