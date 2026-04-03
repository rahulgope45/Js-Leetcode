let arr = [1,2,4,5,6]

function max (){
    let n = arr[0]
    for(let i = 1;i < arr.length; i++){
        if(arr[i] > n){
            n = arr[i -1]
        }
        
    }
    return n
}

console.log(max())