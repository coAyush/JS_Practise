console.log("FILE STARTED");

let a = 50;
let s = (function () {//An IIFE cannot be stored in a variable like a normal function because it executes immediately and the variable stores its return value, not the function itself.
    let a = 64;
    console.log(a);
})();

function abcf() {
    console.log("inside")
    let a = 35;
    console.log(s);
}

abcf();