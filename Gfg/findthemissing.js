function findThemissing(arr){

    let n = arr.length +1
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    if(min === 1){
      let expectedSum = (n *(n+1))/2
      let actualSum = arr.reduce((a,b) => a+b,0);
      return expectedSum -actualSum
    }

    if(max === n){
      let expectedSum = (n *(n+1))/2
      let actualSum = arr.reduce((a,b) => a+b,0);
      return expectedSum -actualSum
    }

    let expectedSum = (max - min +1) * (min + max) /2
    
    let actualSum = arr.reduce((a,b) => a+b,0)

    return expectedSum -actualSum
}

console.log(findThemissing([10,11,13]))
console.log(findThemissing([1]))
console.log(findThemissing([23]))

