let date1 = new Date("2022-09-05");
let date2 = new Date("2022-01-01");
let diffTime = Math.abs(date2 - date1);
let diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
