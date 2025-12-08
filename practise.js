/*let a=(a,b)=>{
    console.log(`${a+b}`)
}
a(5,10);
*/
//arrow dfunction with function expression expression
/*let a=(v1,v2)=>{
    return v1+v2
}
console.log(a(5,10));
*/

//higher order function
function abcd(val){
    return function(mul){
        c=val();
        return mul*c;
    }
}

let a=abcd(function (v1,v2){
    return v1+v2;
})
console.log(a(5,10)(2));

