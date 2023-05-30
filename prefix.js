function longestCommonPrefix(arr) {
  let size = arr.length;

  if (size == 0) return "";

  if (size == 1) return arr[0];

  arr.sort();

  let end = Math.min(arr[0].length, arr[size - 1].length);

  let i = 0;
  while (i < end && arr[0][i] == arr[size - 1][i]) i++;

  let prefix = arr[0].substring(0, i);
  return prefix;
}

let array = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(array));
