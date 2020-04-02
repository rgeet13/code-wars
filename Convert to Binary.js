function toBinary(n) {
  var bin = "";
  while (n > 0) {
    bin = (n % 2) + bin;
    n = Math.floor(n / 2);
  }
  console.log(bin);
  return parseInt(bin);
}

toBinary(8);
