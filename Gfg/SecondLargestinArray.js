function Great(arr){
 let max = -1
 let secondMax = -1

 for(let nums of arr){
    if(nums >max){
        secondMax = max
        max = nums
    }else if(nums > secondMax && max !== nums )
    secondMax = nums 
 }


 return secondMax 
}

console.log(Great([10,10]))