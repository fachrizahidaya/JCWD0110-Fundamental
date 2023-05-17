let a = {
  name: "felix",
  age: 23,
};
let b = {
  name: "felix",
  kelas: 12,
};

a["kelas"];
console.log(a.kelas);

let c = {};

for (let key in a) {
  if (a[key] === b[key]) {
    c[key] = a[key]; //object c akan sama dengan properties dan value dari object a
  }
}
console.log(c);
