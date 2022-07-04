function increaseEvenEl(arr, delta){
    if(!Array.isArray(arr)){
        return null;
    }
    return arr.slice().map(arr => arr + delta);
}