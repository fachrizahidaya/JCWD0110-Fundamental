function compare(kalimat1, kalimat2) {
  kalimat1 = kalimat1.replace(/ /g, "");
  kalimat2 = kalimat2.replace(/ /g, "");
  if (kalimat1.length !== kalimat2.length) {
    return false;
  } else {
    return (
      kalimat1.toLowerCase().split("").sort().join("") ===
      kalimat2.toLowerCase().split("").sort().join("")
    );
  }
}
console.log(compare("mati", "itam"));
