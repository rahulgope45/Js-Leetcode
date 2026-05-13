function Num(x,n){
    x = n
    if(x > n) return 
    console.log(x);
    Num(x-1,n);
};

Num(1,10)