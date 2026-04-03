function linear(arr, tar){
    for(let i = 0;i< arr.length; i++){
        if(arr[i]=== tar){
          return i
        }
    }
}

const number = [1,2,3]
console.log(linear(number,2))