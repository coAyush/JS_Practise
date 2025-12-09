let percent = document.querySelector(".percent");
let progress = document.querySelector(".progress");
let btn = document.querySelector(".btn");
let pr = 0;
let seconds = 10;
btn.addEventListener("click", () => {
    btn.textContent = `Downloading: ${pr}%`;
    let st = setInterval(() => {
    if (pr <= 99) {
        percent.textContent = `${pr}%`
        progress.style.width = `${pr}%`
        pr++;
    }
    btn.textContent = `Downloading: ${pr}%`;
    if (pr == 100) {
        btn.textContent = "Download finished";
        percent.textContent = `${pr}%`
        clearInterval(st);

    }
}, (seconds * 1000) / 100);
})
