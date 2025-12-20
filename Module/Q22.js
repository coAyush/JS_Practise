function strin(str){
    let l={};
    for(let s of str){
        l[s]=(l[s]||0)+1;
        }
    let max=0;
    for(let i in l){
        if(l[i]>max){
            max=l[i];
        }
    }
    let res="";
    for(let s of str){
        if(l[s]==max){
            res+="*";
        }else{
            res+=s;
        }
    }
    return res;
}

console.log(strin("programming"));