//For removing the dublicates there are two methods 

//the Easy one but doesn't work with leetcode for that we need to use 2 pointers

let nums = [1,1,2]

function dubE(){
    newArr = [...new Set(nums)]
    console.log(newArr);
};

dubE()

//Previous one worked we were not told we can't return a new array

function dubC(){
    if(nums.length == 0) return 0;

    let i = 0
    for(let j = 1; j< nums.length;j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    console.log(i+1)
}
dubC()