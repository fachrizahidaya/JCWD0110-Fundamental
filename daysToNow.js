function daysPassedToNow(date) {
  let current = new Date().getTime();
  console.log(current)
  let previous = new Date(date).getTime();
  console.log(previous)
  return Math.ceil((current - previous + 1) / 86400000);
}
let d = new Date("2023-01-01");
console.log(daysPassedToNow(d));
