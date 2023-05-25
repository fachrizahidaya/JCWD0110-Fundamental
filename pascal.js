const pascalTriangle = (num) => {
  if (num <= 0) "Invalid Number";
  if (num == 1) [[1]];
  let res = [[1], [1, 1]];
  if (num == 2) return res
  for (let i = 2; i < num; i++) {
    let temp = [1];
    let previous = [...res[i - 1]];
    previous.map((item, index) => {
      if (previous[index + 1]) {
        temp.push(item + previous[index + 1]);
      }
    });
    temp.push(1);
    res.push(temp);
  }
  return res;
};
console.log(pascalTriangle(5));
