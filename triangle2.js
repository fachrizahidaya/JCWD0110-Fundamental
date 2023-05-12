function triangle(n) {
    let result = "";
    let counter = 1;
    // nested looping
    for (let i = 1; i <= n; i++) {
      // console.log("i:", i); // hasil 1,2,3,4,5
  
      for (let j = 1; j <= i; j++) {
        //hasil i:1 --> 1; i:2 --> 1,2; i:3 --> 1,2,3
        //   console.log("j:", j);
        if (counter <= 9) {
          result += `0${counter} `;
        } else {
          result += `${counter} `;
        }
        counter++;
      }
      result += "\n";
    }
    console.log(result);
  }
  triangle(4);
  