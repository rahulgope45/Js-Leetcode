let digits = [1,2,3];
let digit =  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

function addOne(){
    let newArr = digits.join("")
    newArr = Number(newArr) + 1
    let ewArr = String(newArr).split("").map(Number)
    console.log(ewArr)
}

function addBig(){
    for(let i = digit.length -1; i >= 0; i--){
        if(digit[i] < 9){
            digit[i] += 1;
            break
            
        }
        digit[i] =0;
    }
    digit.unshift(1)
    console.log(digit)
}

addOne()
addBig()