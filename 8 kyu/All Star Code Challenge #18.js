function strCount(str, letter) {
  var letterCount = 0;
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      letterCount++;
    }
  }
  return letterCount;
}

//strCount("geet", "g");
