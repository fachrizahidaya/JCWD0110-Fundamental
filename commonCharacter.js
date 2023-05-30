function findCommon(string) {
  let arr = string.split("");
  //   console.log(arr.length);
  let arrModus = 0;

  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      //   console.log(arr[j]);
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > arrModus) {
        arrModus = count;
        index = i;
      }
    }

    // console.log(count);
  }
  console.log(arrModus);
  //   console.log(arr[index]);

  if (arrModus <= arr.length / 2) {
    return arr[index];
  } else {
    return "No majority";
  }
}

console.log(findCommon("hellooo"));
