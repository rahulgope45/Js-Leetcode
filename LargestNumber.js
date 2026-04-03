let arr = [12,34,5,6,78]

//Find the Largest number in the array


//First using brute method sorting the array in accending order than retuning the last element
function Largest(){
  const sorted = arr.sort((a,b) => a-b);
   console.log(sorted.at(-1))
}

Largest()

//Method Second Optimized version

function greatest(){
    let max = arr[0]
    for(let i =1; i<arr.length;i++){
        if(arr[i] > max){
           max = arr[i]
        }
    }
    return max;
}

function treatest(){
    let max = arr[0]
    for(let i =1; i<arr.length;i++){
        if(arr[i] > max){
           max = arr[i -1]
        }
    }
    return max;
}

console.log(greatest())
console.log(treatest())