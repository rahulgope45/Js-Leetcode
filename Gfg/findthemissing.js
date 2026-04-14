function findThemissing(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let expectedSum = (max - min +1) * (min + max) /2
    console.log(expectedSum)
    let actualSum = arr.reduce((a,b) => a+b,0)

    console.log(expectedSum -actualSum)
}

findThemissing([10,11,13])

