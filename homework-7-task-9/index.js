function arrAverage (arr) {
    if(!Array.isArray(arr)){
        return null
    }

   return arr.reduce((sum, a) => sum + a, 0) / arr.length; 
}