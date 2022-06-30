function removeDuplicates(array){
    if(!Array.isArray(array)){
        return null
    }
  
let arr =  Array.from(new Set(array))
return arr;
}