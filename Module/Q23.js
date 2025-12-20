let s="coc";
let arr=[];
let max=[];
let maxi=0;
for(let i=0;i<s.length;i++){
    let obj={};
    if(arr.length==0){
    obj[s.charAt(i)]=1;
    }else{
        arr.forEach(val){
            for(key in val){
                if(key==s.charAt(i)){
                    val[key]+=1;
                    if(val[key]>=maxi){
                        max[s.charAt(i)]
                    }
                }else{
                    obj[s.charAt(i)]=1;
                }
            }
        }
    }
}