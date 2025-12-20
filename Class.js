function PencilFactory(name,brand,color,price,text){

    this.name=name;
    this.brand=brand;
    this.color=color;
    this.price=price;
    document.body.textContent=text;
    console.log(this);
};
//PencilFactory("HB","Nataraj","Yellow",10);
//console.log(global.name);// so doing this without using new keyword adds properties to global object
let p1=new PencilFactory("Apsara","ITC","BlaCK","10","Myname is coco");
let p2=new PencilFactory("Nataraj","Nataraj","Red","10","Myna");
console.log(p1.brand);
console.log(p2.name);

//now if we want to make the things common among all the objects so that the extra space wont gt wasted
//for this we use prototype which is somewhat like similar to static keyword in java
//prototype is a extra stored related to class where shared resourece are stored and shraed among instances of that class

//eg.
PencilFactory.prototype.write=function(){
    document.body.style.color=this.color;
    document.body.textContent=`Writing with my pencil named ${this.name}`
};
PencilFactory.prototype.company="Ayush STATIONARIES";
p1.write();


//Proper syntax of classes

class PencilFactory1{
     constructor(brand,price,name,color){
        this.brand=brand;
        this.price=price;
        this.name=name;
        this.color=color;
     }
      write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
      }
}
PencilFactory1.prototype.erase=function(){
    document.body.remove(document.querySelector("h1"));
}
let pen1=new PencilFactory1("Doms","10","DOMS","blue");


//CLASS INHERITANE DONE USING EXTEND KEYWORD
class User{
    constructor(name,nickname,age){
        this.name=name;
        this.age=age;
        this.nickname=nickname;
    }
    role="user";
    write=function(text){
        let w=document.createElement("h1");
        w.style.color="blue";
        w.textContent=`Hi from ${this.role} writing ${text} name ${this.name}`;
        document.body.appendChild(w);
    }
}

class Admin extends User{
    constructor(name,nickname,age){
        super(name,nickname,age);
    }
    role="Admin";
     write=function(text){
        let w=document.createElement("h1");
        w.style.color="blue";
       w.textContent=`Hi from ${this.role} writing ${text}`
        document.body.appendChild(w);
    }
    erase=function(){document.querySelectorAll("h1").forEach(function(ev){
        document.body.remove(ev);
    })};
}
let harsh=new User("harsh","coder","26");
let harshita=new User("harsita","pookie","26");
let Ayush=new Admin("Ayush","ansu","23");

