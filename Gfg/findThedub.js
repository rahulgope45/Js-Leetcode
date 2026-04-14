function FindDub(arr){
    let seen = new Set();
    let dublicates = new Set();

    for(let nums of arr){
        if(seen.has(nums)){
            dublicates.add(nums)
        }else{
            seen.add(nums)
        }
    }
    return Array.from(dublicates)
}

console.log(FindDub([1,1,2,2,55,55,4]))
console.log(FindDub([]))
console.log(FindDub([1,,2,55,4]))