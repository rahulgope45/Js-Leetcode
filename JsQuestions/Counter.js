var n = 10; //Starting Point

const createCounter =function(n){
     //taking current value to starting point
     let current = n;
     return function counter(){
         let result = current;
         current = current + 1;
         return result;
     }

}

const Newcounter = createCounter(n);
Newcounter();

console.log(Newcounter());