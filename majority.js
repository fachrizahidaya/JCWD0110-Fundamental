const searchMajor = (arr) => {
  // untuk menampung jumlah kemunculan number yang paling besar
  let arrModus = 0;
  //   untuk menghandle jika number tidak ada di array
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    // untuk menampung jumlah kemunculan number
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // jika sama angkanya count akan bertambah 1
        count++;
      }
      if (count > arrModus) {
        arrModus = count;
        index = i;
      }
    }
  }
  if (arrModus > arr.length / 2) {
    return arr[index];
  } else {
    return "No majority";
  }
};

let a = [3,2,3];

console.log(searchMajor(a));
