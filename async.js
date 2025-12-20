function  library(userId,func){
  console.log("Fetching details.....");
  //this is the inner logic which in stored i some library which we developers not need to know 
  setTimeout(()=>{
    func({"userId":123,
        "role":"student",
        "player":"coc"
    });
  },3000);
  console.log("fetching in progress........")
}

//this is the callback function that we pass to another.
function cb(data){
   console.log("my details are",data);
   function displayData(role){//this nesting of calllbacks is callled callback hell
    console.log("Role of player is ....")
    setTimeout(()=>{
          console.log(`${role}`)
    },4000);
}
displayData(data.role);
}

library(123,cb)//what wev are doing here we give is give user details but we dont know how much
//time it would take to send the data so with call we specify what to do after the data is beingfetched
//and logic is specified in callbakcs

