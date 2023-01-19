function isSorted(boxNumbers) {
  for (let i = 2; i <= boxNumbers; i++) {
    if (boxNumbers[i] < boxNumbers) {
      false;
    }
    if (boxNumbers.length[i] === boxNumbers) {
      true;
    }
  }
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([0, 1, 1, 1, 2])); // true
console.log(isSorted([1, 2, 11])); // true
console.log(isSorted([5])); // true
console.log(isSorted([])); // true
console.log(isSorted([0, 3, 1, 2, 2, 2])); // false
console.log(isSorted([1, 11, 2])); // false
