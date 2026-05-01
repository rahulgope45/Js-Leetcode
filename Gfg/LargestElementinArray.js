//Find the Greatest number in array;

function Great(arr){
    let max = arr[0];

    for(let i= 0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(Great([1,22,33,4,5]))