function differenceInAges(ages) {
  var youngestAge = ages[0];
  var oldestAge = 0;
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > oldestAge) {
      oldestAge = ages[i];
    }
  }
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] < youngestAge) {
      youngestAge = ages[i];
    }
  }
  return [youngestAge, oldestAge, oldestAge - youngestAge];
}

differenceInAges([82, 15, 6, 38, 35]);
