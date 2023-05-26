// async
console.log("task 1");
setTimeout(() => {
  console.log("task 2");
}, 3000);
console.log("task 3");

// contoh lain
function message() {
  console.log("Async is easy");
}
setTimeout(message, 3000);

let database = [1, 2, 3, 4, 5];
let removeData1 = (callback) => {
  setTimeout(() => {
    database.pop();
    callback();
  }, 5000);
};

removeData1(() => {
  setTimeout(() => {
    console.log(database);
  }, 3000);
});
