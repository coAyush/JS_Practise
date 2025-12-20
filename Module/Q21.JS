//21. Design a JavaScript function insertIntoArray(arr, val, n) that receives an array ‘arr’, a value ‘val’, and
//an integer ‘n’ and returns an array with the value inserted at every nth position.
let s= function(arr,value,n){
     if(n>arr.length){
        arr.push(value);
     }
     else if(n<=arr.length){
        for(let i=n;i<=arr.length;i+=(n+1)){
        arr.splice(i,0,value);
        }
     }
     return arr;
}
console.log(s([1,2,3,4,5,6],5,3));