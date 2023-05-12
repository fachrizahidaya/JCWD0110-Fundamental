function triangle(n) {
  let result = "";
  let counter = 0;
  // nested looping
  for (let i = 1; i <= n; i++) {
    console.log("I:", i); // hasil 1,2,3,4,5

    for (let j = 1; j <= i; j++) {
      console.log("J:", j);
      counter++;
      console.log(counter);
      //hasil i:1 --> counter:1; i:2 --> counter:2,3; i:3 --> 1,2,3
      //   console.log("j:", j);
      if (counter <= 9) {
        result += `0${counter} `;
      } else {
        result += `${counter} `;
      }
    }
    result += "\n";
  }
  console.log(result);
}
triangle(4);
