let mode=document.querySelector("#mode");
mode.addEventListener("click",(event)=>{
    if(mode.title=="dark mode"){
        mode.setAttribute("src","dark.png");
        mode.setAttribute("title","light mode");
        document.body.style.backgroundColor="white"
    }else{
         mode.setAttribute("src","light.png");
        mode.setAttribute("title","dark mode");
        document.body.style.backgroundColor="black"
    }
})

let ul=document.querySelector("ul");
ul.addEventListener("click",(event)=>{
    event.target.classList.toggle("lt")
})