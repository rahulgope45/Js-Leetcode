//Find the second largest number if the nums are all the same return -1 

let arr = [3,10,10];

function Second(){
    let fir = -1
    let sec = -1

    for(let num of arr){
        if(num > fir){
            sec = fir;
            fir = num;
        }else if(num > sec && fir !== num){
            sec = num;
        }
    }
    console.log(sec);
}

Second()