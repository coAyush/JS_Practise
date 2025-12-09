let pref=window.matchMedia("(prefers-color-scheme: dark)");
let back=document.querySelector("#theme-toggle");
let saveMode=localStorage.getItem("mode");
if(saveMode=="dark"){
    document.body.classList.add("dark-theme");
    back.checked=true;
}else if(saveMode=="light"){
    document.body.classList.remove("dark-theme");
    back.checked=false;
}else if(pref.matches){
    document.body.classList.add("dark-theme");
    back.checked=true;
}

back.addEventListener("change",(event)=>{
    if(event.target.checked){
        document.body.classList.add("dark-theme");
        localStorage.setItem("mode","dark");
    }else{
        document.body.classList.remove("dark-theme");
        localStorage.setItem("mode","light");
    }
});