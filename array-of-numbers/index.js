function createArray(N) {
  if (N === 0) {
    return [];
  }

  let numbers = [];

  for (let i = 1; i <= N; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArray(1)); // [1]
console.log(createArray(3)); // [1, 2, 3]
console.log(createArray(0)); // []
