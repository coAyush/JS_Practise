/*let p=document.querySelector("#txt");
let d=document.querySelector("#display");
p.addEventListener("input",(event)=>{
   if(event.data!==null){
    d.textContent+=event.data;
   }else{
    d.textContent=d.textContent.slice(0,-1);
   }
})*/
let c=document.createElement("p");
let op=document.querySelector("select");
op.addEventListener("change",(event)=>{
   document.querySelector("body").insertBefore(c,op).innerHTML=`${event.target.value} is selected`;    
})

let f=document.querySelector("#myfile");    
f.setAttribute("display","none");    
console.dir(f);