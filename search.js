// linear
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([2, 20, 10, 3], 20));

// binary
function binarySearch(arr, l, r, x) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}

let arr = [4, 20, 3, 40, 10];
let x = 10;

console.log(binarySearch(arr, 0, arr.length - 1, x));
