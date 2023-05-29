const { OrderProcess } = require("./queueClass");

let orderList = new OrderProcess([
  "Queue 1",
  "Queue 2",
  "Queue 3",
  "Queue 4",
  "Queue 5",
]);

orderList.process();
