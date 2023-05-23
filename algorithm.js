// pseudocode
/**
 * store palindrome in variable
 * create array of alphabet
 * split palindrome letters into array
 * filter palindrome array
 * allow letter if letter an alphabet
 * join palindrome array
 *
 */

let palindrome = "race, car";
let arrAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome
  .split("")
  .filter((letter) => {
    return arrAlphabet.includes(letter);
  })
  .join("");
console.log(palindrome);
