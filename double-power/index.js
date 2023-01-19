function doublePower(currentPowers) {
  if (currentPowers === 0) {
    return [];
  }

  for (let i = 0; i < currentPowers.length; i++) {
    currentPowers[i] *= 2;
  }
  return currentPowers;
}
console.log(doublePower([100, 150, 200, 220])); // [200, 300, 400, 440]
console.log(doublePower([45, 34, 56, 67])); // [90, 68, 112, 134]
console.log(doublePower([])); // []
