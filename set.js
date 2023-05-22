let fruits = ["banana", "apple", "papaya", "kiwi"];
fruits.push();
let newFruits = new Set(fruits);
// menambahkan element ke Set
newFruits.add("salak");
newFruits.add("mango");

// menghapus suatu element dari Set
newFruits.delete("apple");
console.log(newFruits);

// mendapatkan jumlah element pada set
console.log(newFruits.size);
// memeriksa suatu element berada dalam Set
console.log(newFruits.has("kiwi"));
// menghapus semua element dari Set
newFruits.clear();
