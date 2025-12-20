/*20. Create a JavaScript function that takes an array of integers and returns an array with all duplicate
numbers removed preserving the order of the elements.*/
let arr=[1,2,3,4,4,5,6,9,9];

let s=function(value){
    let unique=[];
    arr.forEach((val)=>{
        if(!unique.includes(val)){
            unique.push(val);
        }
    })
    return unique;
}
console.log(`unique array is ${s(arr)}`);
