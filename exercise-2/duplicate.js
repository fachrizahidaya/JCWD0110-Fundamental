const findDuplicate = (arr) => {
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr.indexOf(arr[i]) !== i && duplicate.indexOf(arr[i] === -1)) {
      console.log(arr.indexOf(arr[i])); // 1,1,3,3,4
      // console.log(duplicate.indexOf(arr[i]));
      console.log(arr.indexOf(arr[i]) !== i);
      // console.log(duplicate.indexOf(arr[i] === -1));
      duplicate.push(arr[i]);
    }
  }
  return duplicate;
};
let a = [1, 1, 3, 3, 4]; //1-->0,0; 1-->0,1; 3-->2,2 3-->2,3 4-->4,4
let b = findDuplicate(a);
console.log(b);
