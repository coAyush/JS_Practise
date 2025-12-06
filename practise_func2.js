//1 BMI Calculator
function bmi(weight ,height ){
     return(weight/Math.pow(height,2))
}

console.log(bmi(65.1,84).toFixed(2));

//2 Discount calculator([HOF)
function calculate(fun){
       return fun(5000);
}
console.log(calculate(function(price =100, discount =20){
    return price - (price * discount)/100
}))

//3 counter with closure
function counter(v1,v2){
    console.log(`counter called for ${v1} and ${v2}`);
    let b=0;
    (()=>{
        b++;
        console.log(b);
    })();
}
counter(5,10);


let ar=new Array(5).fill(0);
let i=0;
let newar=new Array();
ar.forEach(function(value,){
    value+=5;
    newar[i]=value;
    i++;
    console.log(value);
}
)
console.log(newar) 