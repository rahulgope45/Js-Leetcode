//Find the Number in the array if the array does not exist it should return -1

const arr = [1,2,3,4,5];
const att = [1,2,4,5];
const x = 3;

function find(){
    let y = -1
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == x){
         y = i
         break;
        }
    }
     console.log(y)
};

find()

function tind(){
    let y = -1
    for(let i = 0; i< att.length; i++){
        if(att[i] == x){
         y = i
         break;
        }
    }
    console.log(y)
};

tind()
