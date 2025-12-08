let h1=document.querySelector("h1");
let btn=document.querySelector("button");
let b=document.querySelector("body");
btn.addEventListener("click",function(){
    let img=document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
    img.setAttribute("alt","A beautiful cat");
    b.insertBefore(img,btn);
    b.style.backgroundColor="lightpink";
    h1.style.color="white";
    h1.textContent="Sab thik hai";
    btn.style.display="none";
});
document.querySelector("a").setAttribute("href","www.youtube.com");
let c=document.querySelectorAll("li");
c.forEach((element)=>{
    console.log(element.textContent);
})
let lis=document.querySelectorAll("li");
for(let i=0;i<lis.length;i++){
    if(i%2==0){
        lis[i].classList.add("huhu");
    }
}
console.dir(c);