//Create an object for student with name,age and isEnrolled
let student={name :"John", age:20,  isEnrolled :true};

let st={true:"yes",45:"yoy"};
console.log(st); // yes

// dynamically change the key value
let key="age";
let user={
    age:25
}
user[key];//30;

//if some vaue is missing
let user1={
    name:"Alice",
    location:"Wonderland"
}
console.log(user1?.age); // undefined


for(key in user1){
    console.log(user1[key]);
}

console.log(Object.entries(user1).forEach((val)=>{
    console.log(val+" "+val.map((v)=>v));
})); // [ [ 'name', 'Alice' ], [ 'location', 'Wonderland' ] ]

console.log(Object.keys(user1)); // [ 'name', 'location' ]