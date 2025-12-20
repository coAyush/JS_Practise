/*let ch=document.querySelector("p");
let s=ch.addEventListener("click",function(){
     this.style.color="lightfffffffffffblue";
});*/
//Inside global context
console.log(this);

//Inside function context
function abc(){
    console.log(this);
}

//Inside object
let s1={
    name:"Ayush",
    age:23,
    s : function abc(){
        console.log(this)
    }
};

console.log(s1.s());
function abcd(){
    console.log(`age is ${this.age}`)
    };
function abcde(){
    console.log(`age is ${this}`)
    };

abcd.call(s1)

abcd.apply(s1)

let f=abcd.bind(s1);

console.log(f());