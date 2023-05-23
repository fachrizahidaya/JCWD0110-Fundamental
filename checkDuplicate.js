// brute force
let a = [1, 3, 4, 5];
const checkDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
};
console.log(checkDuplicate(a))

// with memory
const checkDuplicate2 = (arr) => {
  let uniqueData = new Set(); // 1, 2, 3
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    else uniqueData.add(arr[i]);
    console.log(uniqueData);
  }
  return false;
};

console.log(checkDuplicate2([1, 2, 3, 1]));

// without memory
const checkDuplicate3 = (arr) => {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
};

console.log(checkDuplicate3([5, 1, 3, 1]));
