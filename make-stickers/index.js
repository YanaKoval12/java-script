function makeStickers(detailsCount, robotPart) {
  if (detailsCount === 0) {
    return [];
  }

  let arr = [];

  for (let i = 1; i < detailsCount;  i++) {
    arr.push(`${robotPart} detail #${i}`);
  }
  return arr;
}

console.log(makeStickers(3, "Body")); // ['Body detail #1', 'Body detail #2', 'Body detail #3'];
console.log(makeStickers(4, "Head")); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4'];
console.log(makeStickers(0, "Foot")); // [];
