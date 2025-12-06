let a=new Array(5).fill(0);
console.log(a); // [0, 0, 0, 0, 0]
let b=a;
b[5]+=10;
console.log(a); // [0, 0, 0, 0, 0, 10]
console.log(b); // [0, 0, 0, 0, 0, 10]

let c=[...a];
c[0]+=5;
console.log(a); // [0, 0, 0, 0, 0, 10]
console.log(c); // [5, 0, 0, 0, 0, 10]


//1> Creae an array with 3 fruits and print second fruit
let fruits=["Apple","Mango","banana"];
console.log(fruits[1]);

fruits.push("Orange");//adding element at the end
fruits.unshift("Pineapple");//adding element at the start
console.log(fruits);

//replace banana with Kiwi
let i=fruits.indexOf("banana");
if(i!==-1 && i<fruits.length){
    fruits[i]="Kiwi";
}   
console.log(fruits);

let arr=[1,2,5,6];
arr.splice(2,0,3,4);//at index 2, remove 0 elements and add 3,4
console.log(arr); // [1, 2, 3, 4, 5, 6]

let ar=[1,2,3,4,5,6];
mid=Math.floor(ar.length/2);
//extract middle 3 elements
if(mid-1!=-1 && mid+1<ar.length){
    let arr=ar.slice(mid-1,mid+2);
    console.log(arr); // [3, 4, 5]
}

//sort alphabetically and reverse it
let veg=["carrot","broccoli","asparagus","cauliflower"];
veg.sort().reverse();
 // ['cauliflower', 'carrot', 'broccoli', 'asparagus']

 //return squares of all elements in an array
 let sq=[1,2,3,4,5];
 let square=sq.map((num)=>{
    return Math.pow(num,2);
 })
    console.log(square); // [1, 4, 9, 16, 25]

//filter all even numbers from an array
let odd=square.filter((num)=>{
    return num%2!=0;
})
console.log(odd); // [1, 9, 25]

//find sum of the odd array elements

let total=odd.reduce((accumulator,value)=>{
    return accumulator+value;
},0);//initial value of accumulator is 0
console.log(total); // 35

//find the number divisible by 3 in an array
let s=odd.find((num)=>{
    return num%3==0;
})
console.log(s); // 9

//check if all elements in an array are less than 30
let check=odd.every((num)=>{
    return num<30;
})
console.log(check); // true

//check if there is any element greater than 20
let ch=odd.some(function(num){
    return num<20;
})
console.log(ch); // true

fullname=["John","F.","Kennedy"];
[fname,,lname]=fullname;
console.log(fname+" "+lname); // John