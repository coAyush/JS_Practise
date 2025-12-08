/*let inputs =document.querySelectorAll("input");
let button =document.querySelector("button");

let op=document.querySelector("#output");
let o=document.querySelectorAll(".Display");
let pr=document.querySelector("#profileImage");
op.style.visibility="hidden";
button.addEventListener("click",function(inp){
    inp.preventDefault();
     op.style.visibility="visible";
     o[0].textContent=inputs[0].value;
     o[1].textContent=inputs[1].value;  
     pr.setAttribute("src",inputs[2].value);
});*/
let mo=document.querySelector("#container");
mo.addEventListener("mouseover",()=>{
    mo.style.backgroundColor="yellow";
});
mo.addEventListener("mouseout",()=>{
    mo.style.backgroundColor="pink";
});