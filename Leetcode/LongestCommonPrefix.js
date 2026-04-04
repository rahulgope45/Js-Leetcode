//Find the longest common prfix which means commpare the strings in an array see how many have common words 
//If none return empty array

const strs = ["flower","flow","flex"];

function Pre(){
   let prfex = strs[0]

   for(let i = 0; i < strs.length ; i++){
    while(strs[i].indexOf(prfex) != 0){
        prfex = prfex.substring(0, prfex.length -1)
    }
   }
   console.log(prfex)
};

Pre()