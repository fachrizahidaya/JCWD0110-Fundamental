const price = 10000;
let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

// console.log(rupiah.format(price).replace(/Rp/g, "Rp."));

let n = 10000;
let idr = n.toString();
let len = idr.length;
let formated_idr = "";
let counter = 0;
for (i = len - 1; i >= 0; i--) {
  formated_idr = idr[i] + formated_idr;
  if (++counter == 3) {
    console.log(counter);
    console.log(++counter);
    formated_idr = "." + formated_idr;
    console.log(formated_idr);
    counter = 0;
  }
}
formated_idr = "Rp. " + formated_idr + ",00";
// console.log(formated_idr);
