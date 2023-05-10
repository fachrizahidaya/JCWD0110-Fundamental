// global scope -- bisa dipanggil diluar scope
{
  var name = "johnny";
}
console.log(name);

// tidak dapat diubah jika berbeda scope
let name = "johnny";
if (name) {
  let name = "jason";
}
console.log(name);

// let hanya dapat dipanggil di dalam scope yang sama
{
  const name = "johnny";
  console.log(name);
}
