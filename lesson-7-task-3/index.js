const flatArray = arr => {
    const flatArray = arr
    .reduce((acc, elem) => {
        return acc.concat (elem);
    }, []);
    return flatArray;
  };

  const initArray = [1, 3 [ 2, 4 ], 7 , 5 [6]];

  console.log(initArray);