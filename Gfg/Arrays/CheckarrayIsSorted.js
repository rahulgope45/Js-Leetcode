function RArr(arr){
   let newArr = [...arr].sort((a,b)=>a-b);
   for(let i = 0;i<arr.length;i++){
    if(arr[i] !== newArr[i]){
        return false;
    }

   }
   return true
}

console.log(RArr([90,100,20,30,70]))
console.log(RArr([1,2,3,7]))