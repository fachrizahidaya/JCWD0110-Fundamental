console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("abc"));

let text = " ";
console.log(text.length);
if (text.length === 2) {
  console.log(`Data masih kosong`);
} else {
  console.log(`Data sudah lengkap`);
}

if (text) {
  console.log(`Data sudah lengkap`);
} else {
  console.log(`Data masih kosong`);
}
