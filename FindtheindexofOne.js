let S = "00001"

// Find the index of 1 and if S = 0 it should return -1

function index(){
    let one = -1
    for(let i = 0; i < S.length ; i++){
        if(S[i] == "1"){
            one = i
        }
    }
    console.log(one)
}

index()

//When T = 0

let T = "0000"
function tndex(){
    let one = -1
    for(let i = 0; i < T.length ; i++){
        if(T[i] == "1"){
            one = i
        }
    }
    console.log(one)
}

tndex()