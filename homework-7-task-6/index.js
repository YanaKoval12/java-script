function sum(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const flatArray = arr
    .reduce((acc, num) => {
       return acc + num;
    }, 0);

    return flatArray;
}
console.log(sum([2, 5, 6, 3, 0, 3, -1]));