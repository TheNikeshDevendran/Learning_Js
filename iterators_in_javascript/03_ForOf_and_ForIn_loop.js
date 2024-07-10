let subjects=['english','math','science']
/* This are two method to make array empty
   subjects.splice(0,subjects.length);
   subjects.length=0  */
   
// for(data of subjects){
//    console.log(data);
// }

let obj={
   1:'one',
   2:'two',
   3:'three'
}

for(datas in obj){
   console.log(datas+":"+obj[datas])
}