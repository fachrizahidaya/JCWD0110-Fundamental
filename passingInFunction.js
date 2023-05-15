// passing by reference --> array, non-primitive, immutable
function d(arr) {
  arr[0] = 3;
  console.log(arr);
}
let a = [1, 2, 3, 4];
d(a);
console.log(a);
/* fungsi mengubah nilai yang diteruskan ke dalamnya, 
maka perubahan tersebut juga akan mempengaruhi nilai asli di luar fungsi.
*/

// passing by value --> integer, string, boolean; primitive; mutable
function b(num) {
  num = 3;
  console.log(num);
}
let c = 1;
b(c);
console.log(c);
/*
fungsi menerima salinan dari nilai asli yang dikirimkan ke fungsi tersebut, 
dan tidak mengubah nilai asli di luar fungsi.
*/
