function timeleft(str){
    let curr=new Date(str);
    let end=new Date(now);
    end.setHours(23,59,59,999);
    let diff=end=-curr;
  return Math.floor(diff/(1000*60*60));
}
console.log(timeleft("16/12/2025"));