function findAge(birthDate) {
  let d = new Date().getFullYear() - new Date(birthDate).getFullYear();
  return d;
}

let date = "1998-05-16";
console.log(findAge(date));
