function findSingle(arr) {
  let single = [];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr.filter((a) => a == arr[i]);

    if (temp.length == 1) {
      single.push(arr[i]);
    }
  }
  return single.join();
}

console.log(findSingle([4, 1, 2, 1, 2]));
